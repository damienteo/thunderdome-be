import { Request, Response, NextFunction } from "express";
const ethers = require("ethers");

import { Deposit } from "../models/deposits";
import { Product } from "../models/products";
import { Transaction } from "../models/transactions";

import { TransactionType } from "../utils/interfaces/ITransaction";

const asyncHandler = require("../utils/methods/asyncHandler");
const ThunderDomeNFTJson = require("../utils/abis/ThunderDomeNFT.json");

const { WEB_SOCKET_PROVIDER, THUNDERDOME_NFT_ADDRESS, POKEMON_CENTER_ADDRESS } =
  process.env;

const ThunderDomeNFTAddress = THUNDERDOME_NFT_ADDRESS;
const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

const contract = new ethers.Contract(
  ThunderDomeNFTAddress,
  ThunderDomeNFTJson.abi,
  provider
);

// @desc    Get deposits by address
// @route   POST /api/v1/deposits
// @access  Public
exports.getDeposits = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await Deposit.find({ ...req.body })
      .sort({ _id: 1 })
      .limit(6);

    const nextData = await Promise.all(
      data.map(async ({ tokenId }) => await Product.find({ tokenId }))
    );

    res.status(200).json({
      success: true,
      data: nextData.flat(),
    });
  }
);

// @desc    Add single deposit
// @route   POST /api/v1/deposits/add
// @access  Public
exports.createDeposit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { tokenId, txDetails } = req.body;

    const data = await Product.findOne({ tokenId });
    if (!data) {
      return next(
        new ErrorResponse(`Product by tokenId of '${tokenId}' not found`, 404)
      );
    }

    const nextOwner = await contract.ownerOf(tokenId);

    if (nextOwner !== data.owner) {
      // Update owner for token id
      // Matches onchain info
      await Product.findOneAndUpdate({ tokenId }, { owner: nextOwner });

      if (nextOwner === POKEMON_CENTER_ADDRESS) {
        // Save deposit to Database
        const nextDeposit = new Deposit({
          // Owner as in real owner who staked
          // Even though token is now in the staking contract
          owner: txDetails.from,
          transactionHash: txDetails.transactionHash,
          tokenId,
        });
        nextDeposit.save();

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.StakingDeposit,
        });
        nextTransaction.save();
      }
    }

    res.status(201).json({
      success: true,
      data,
    });
  }
);

// @desc    Remove single deposit
// @route   DELETE /api/v1/deposits/remove
// @access  Public
exports.removeDeposit = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { tokenId, txDetails } = req.body;

    const data = await Product.findOne({ tokenId });
    if (!data) {
      return next(
        new ErrorResponse(`Product by tokenId of '${tokenId}' not found`, 404)
      );
    }

    const nextOwner = await contract.ownerOf(tokenId);

    if (nextOwner !== data.owner) {
      // Update owner for token id
      await Product.findOneAndUpdate({ tokenId }, { owner: nextOwner });

      if (nextOwner !== POKEMON_CENTER_ADDRESS) {
        // Remove from Database
        await Deposit.findOneAndDelete({ tokenId });

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.StakingWithdrawal,
        });
        nextTransaction.save();
      }
    }

    res.status(201).json({
      success: true,
      data,
    });
  }
);
