import mongoose from "mongoose";

import { IDeposit } from "../utils/interfaces/IDeposit";

const depositSchema = new mongoose.Schema<IDeposit>(
  {
    owner: {
      type: String,
      required: true,
    },
    transactionHash: {
      type: String,
      required: true,
    },
    tokenId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Deposit = mongoose.model<IDeposit>("deposit", depositSchema);

export { Deposit };
