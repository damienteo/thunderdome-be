import { Request, Response, NextFunction } from "express";

import { Product } from "../models/products";

const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await Product.find({});

    res.status(200).json({
      success: true,
      data,
    });
  }
);

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getSingleProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const data = await Product.findOne({ name });
    if (!data) {
      return next(
        new ErrorResponse(`Product by name of '${name}' not found`, 404)
      );
    }
    res.status(200).json({
      success: true,
      data,
    });
  }
);
// Note: https://stackoverflow.com/questions/9824010/mongoose-js-find-user-by-username-like-value

// @desc    Create single product
// @route   POST /api/v1/products/:id
// @access  Public
exports.createSingleProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image, tokenId, owner } = req.body;

    const product = Product.build({ name, description, image, tokenId, owner });

    await product.save();

    return res.status(201).json({
      success: true,
      data: product,
    });
  }
);
