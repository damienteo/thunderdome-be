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
    const { address } = req.body;
    const data = await Deposit.find({ from: address })
      .sort({ _id: 1 })
      .limit(6);

    res.status(200).json({
      success: true,
      data,
    });
  }
);

// @desc    Add single deposit
// @route   POST /api/v1/deposits/
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
    let result;
    if (nextOwner !== data.owner) {
      // Update owner for token id
      result = await Product.findOneAndUpdate(
        { tokenId },
        { owner: nextOwner }
      );

      // Save deposit to Database
      if (nextOwner === POKEMON_CENTER_ADDRESS) {
        const nextDeposit = new Deposit({
          ...txDetails,
          category: TransactionType.StakingDeposit,
        });
        nextDeposit.save();
      }

      // Save transaction to database
      const nextTransaction = new Transaction({
        ...txDetails,
        category: TransactionType.StakingDeposit,
      });
      nextTransaction.save();
    }

    res.status(201).json({
      success: true,
      data,
    });
  }
);

// @desc    Remove single deposit
// @route   DELETE /api/v1/deposits/
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

      // Remove from Database
      if (nextOwner !== POKEMON_CENTER_ADDRESS) {
        await Deposit.findOneAndDelete({ tokenId });
      }

      // Save transaction to database
      const nextTransaction = new Transaction({
        ...txDetails,
        category: TransactionType.StakingDeposit,
      });
      nextTransaction.save();
    }

    res.status(201).json({
      success: true,
      data,
    });
  }
);
