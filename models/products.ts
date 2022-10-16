import mongoose from "mongoose";

import { IProduct } from "../utils/interfaces/IProduct";

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tokenId: {
      type: Number,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export { Product };
