import { Request, Response, NextFunction } from "express";
const ethers = require("ethers");

import { Listing } from "../models/listings";
import { Product } from "../models/products";
import { Transaction } from "../models/transactions";

import { TransactionType } from "../utils/interfaces/ITransaction";

const asyncHandler = require("../utils/methods/asyncHandler");
const ThunderDomeNFTJson = require("../utils/abis/ThunderDomeNFT.json");
const MarketPlaceJson = require("../utils/abis/MarketPlace.json");

const { WEB_SOCKET_PROVIDER, THUNDERDOME_NFT_ADDRESS, MARKETPLACE_ADDRESS } =
  process.env;

const ThunderDomeNFTAddress = THUNDERDOME_NFT_ADDRESS;
const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

const contract = new ethers.Contract(
  ThunderDomeNFTAddress,
  ThunderDomeNFTJson.abi,
  provider
);

const marketPlaceContract = new ethers.Contract(
  MARKETPLACE_ADDRESS,
  MarketPlaceJson.abi,
  provider
);

// @desc    Get listings by address
// @route   POST /api/v1/listings
// @access  Public
exports.getListings = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await Listing.find({ ...req.body }).sort({ _id: 1 });

    const nextData = await Promise.all(
      data.map(async ({ tokenId }) => await Product.find({ tokenId }))
    );

    res.status(200).json({
      success: true,
      data: nextData.flat(),
    });
  }
);

// @desc    Add single listing
// @route   POST /api/v1/listings/add
// @access  Public
exports.createListing = asyncHandler(
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
      // Matches onchain info
      result = await Product.findOneAndUpdate(
        { tokenId },
        { owner: nextOwner }
      );

      if (nextOwner === MARKETPLACE_ADDRESS) {
        // Save listing to Database
        const nextListing = new Listing({
          // Owner as in real owner who staked
          // Even though token is now in the staking contract
          owner: txDetails.from,
          transactionHash: txDetails.transactionHash,
          tokenId,
        });
        nextListing.save();

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.MarketPlaceListing,
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

// @desc    Update single listing
// @route   PATCH /api/v1/listings/add
// @access  Public
exports.updateListing = asyncHandler(
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
    if (nextOwner === MARKETPLACE_ADDRESS) {
      // Update owner for token id
      // Matches onchain info
      result = await Product.findOneAndUpdate(
        { tokenId },
        { owner: nextOwner }
      );

      if (nextOwner === MARKETPLACE_ADDRESS) {
        const listingDetails = await marketPlaceContract.listings(tokenId);
        const { buyer, buyerDeposit } = listingDetails;

        if (buyer !== txDetails.from && buyerDeposit !== txDetails.buyerDeposit)
          throw new Error("Incorrect transaction Details");

        await Product.findOneAndUpdate({ tokenId }, { buyer, buyerDeposit });

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.MarketPlaceOffer,
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

// @desc    Complete single listing
// @route   PATCH /api/v1/listings/add
// @access  Public
exports.completeListing = asyncHandler(
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
      // Matches onchain info
      result = await Product.findOneAndUpdate(
        { tokenId },
        { owner: nextOwner }
      );

      if (nextOwner === MARKETPLACE_ADDRESS) {
        // Save listing to Database
        const nextListing = new Listing({
          // Owner as in real owner who staked
          // Even though token is now in the staking contract
          owner: txDetails.from,
          transactionHash: txDetails.transactionHash,
          tokenId,
        });
        nextListing.save();

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.MarketPlaceListing,
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

// @desc    Remove single listing
// @route   DELETE /api/v1/listings/remove
// @access  Public
exports.removeListing = asyncHandler(
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

      if (nextOwner !== MARKETPLACE_ADDRESS) {
        // Remove from Database
        await Listing.findOneAndDelete({ tokenId });

        // Save transaction to database
        const nextTransaction = new Transaction({
          ...txDetails,
          category: TransactionType.MarketPlaceWithdrawal,
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

// updateListing

// completeListing
