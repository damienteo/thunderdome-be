import mongoose from "mongoose";

import { ITransaction } from "../utils/interfaces/ITransaction";

const transactionSchema = new mongoose.Schema<ITransaction>(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
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
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model<ITransaction>(
  "transaction",
  transactionSchema
);

export { Transaction };
