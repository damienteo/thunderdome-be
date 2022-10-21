import mongoose from "mongoose";

import { IDeposit } from "../utils/interfaces/IDeposit";

const depositSchema = new mongoose.Schema<IDeposit>(
  {
    from: {
      type: String,
      required: true,
    },
    transactionHash: {
      type: String,
      required: true,
    },
    tokenId: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Deposit = mongoose.model<IDeposit>("deposit", depositSchema);

export { Deposit };
