import express from "express";
import mongoose from "mongoose";

require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");

const { DB_URL, PORT } = process.env;

// Routes
const products = require("./routes/products");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount Routers
app.use("/api/v1/products", products);

// Handle cases where errors are thrown
app.use(errorHandler);

mongoose.connect(DB_URL || "mongodb://localhost:27017/products", {}, () => {
  console.log("Connected to Mongo!");
});

app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));
