import mongoose from "mongoose";

import { IListing } from "../utils/interfaces/IListing";

const listingSchema = new mongoose.Schema<IListing>(
  {
    seller: {
      type: String,
      required: true,
    },
    offerPrice: {
      type: Number,
      required: true,
    },
    tokenId: {
      type: Number,
      required: true,
    },
    buyer: {
      type: String,
    },
    buyerDeposit: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model<IListing>("listing", listingSchema);

export { Listing };
