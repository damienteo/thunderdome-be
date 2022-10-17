import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { listenForTransfer } from "./utils/listeners/transferListener";
import { errorHandler } from "./middleware/errorHandler";

require("dotenv").config();

const { DB_URL, PORT } = process.env;

console.log({ DB_URL });

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
// listenForTransfer();

app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));

// Export the Express API for Vercel
module.exports = app;
