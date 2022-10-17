const ethers = require("ethers");
const mongoose = require("mongoose");

const { Product } = require("../models/products");
const ThunderDomeNFTJson = require("../utils/abis/ThunderDomeNFT.json");

import { IProduct } from "../utils/interfaces/IProduct";

require("dotenv").config();

const { WEB_SOCKET_PROVIDER, THUNDERDOME_NFT_ADDRESS, DB_URL } = process.env;

const ThunderDomeNFTAddress = THUNDERDOME_NFT_ADDRESS;
const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

const contract = new ethers.Contract(
  ThunderDomeNFTAddress,
  ThunderDomeNFTJson.abi,
  provider
);

mongoose.connect(DB_URL || "mongodb://localhost:27017/thunderdome", {}, () => {
  console.log("Connected to Mongo!");
});

const updateProduct = async (prevAddress: string, tokenId?: number) => {
  if (!tokenId) return;

  const owner = await contract.ownerOf(tokenId);
  if (owner !== prevAddress) {
    await Product.findOneAndUpdate({ tokenId }, { owner });
  }

  return;
};

const updateDB = async () => {
  const products = await Product.find({});
  await Promise.all(
    products.map(({ owner, tokenId }: IProduct) =>
      updateProduct(owner, tokenId)
    )
  );

  return;
};

updateDB()
  .then(() => mongoose.connection.close())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
