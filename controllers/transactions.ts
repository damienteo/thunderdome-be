import { Request, Response, NextFunction } from "express";

import { Transaction } from "../models/transactions";

const asyncHandler = require("../utils/methods/asyncHandler");

// @desc    Get transactions by address
// @route   POST /api/v1/transactions
// @access  Public
exports.getTransactions = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { address } = req.body;
    const data = await Transaction.find({ from: address })
      .sort({ _id: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data,
    });
  }
);
