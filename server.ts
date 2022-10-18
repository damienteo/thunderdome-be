import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { listenForTransfer } from "./utils/listeners/transferListener";
import { errorHandler } from "./middleware/errorHandler";

const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";

require("dotenv").config({ path });

const { DB_URL, PORT } = process.env;

// Routes
const products = require("./routes/products");

const app = express();
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount Routers
app.use("/api/v1/products", products);

// Handle cases where errors are thrown
app.use(errorHandler);

mongoose.connect(DB_URL || "mongodb://localhost:27017/thunderdome", {}, () => {
  console.log("Connected to Mongo!");
});

// listeners
// Error with ethereum:
// TypeError: Cannot set property 'onopen' of undefined
// Oct 18 03:05:28 AM      at new WebSocketProvider (/opt/render/project/src/node_modules/@ethersproject/providers/lib/websocket-provider.js:108:32)
// listenForTransfer();

app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));
