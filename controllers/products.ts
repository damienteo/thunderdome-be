import { Request, Response, NextFunction } from "express";

import { Product } from "../models/products";

const asyncHandler = require("../utils/methods/asyncHandler");
const ErrorResponse = require("../utils/methods/errorResponse");

require("dotenv").config();

const { DB_URL } = process.env;

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log({ DB_URL });
    const data = await Product.find({}).sort({ tokenId: 1 });

    res.status(200).json({
      success: true,
      data,
    });
  }
);

// @desc    Get single product
// @route   GET /api/v1/products/:name
// @access  Public
exports.getSingleProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
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

exports.getSingleProductJson = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name: queryName } = req.params;
    const data = await Product.findOne({ name: queryName });

    if (!data) {
      return next(
        new ErrorResponse(`Product by name of '${queryName}' not found`, 404)
      );
    }

    const { name, description, image } = data;

    res.status(200).json({ name, description, image });
  }
);

// @desc    Create single product
// @route   POST /api/v1/products
// @access  Public
exports.createSingleProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image, tokenId, owner } = req.body;

    const product = new Product({ name, description, image, tokenId, owner });

    await product.save();

    return res.status(201).json({
      success: true,
      data: product,
    });
  }
);
