import { Request, Response, NextFunction } from "express";

import { PokemonType } from "../utils/interfaces/IArena";

const asyncHandler = require("../utils/methods/asyncHandler");

// @desc    Enter Arena with Type
// @route   POST /api/v1/arena
// @access  Public
exports.getTransactions = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { type, address } = req.body;
    // const data = await Transaction.find({ from: address })
    //   .sort({ _id: -1 })
    //   .limit(5);

    setTimeout(() => {
      console.log("lol");
    }, 5000);

    res.status(200).json({
      success: true,
      // data,
    });
  }
);
