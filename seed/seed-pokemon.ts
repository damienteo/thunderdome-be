const mongoose = require("mongoose");

const { Product } = require("../models/products");

const { IPokemonSeedDetails } = require("../utils/interfaces/IPokemonDetails");

const POKEMON_DETAILS = require("../constants/pokemon");
const { ZERO_ADDRESS } = require("../constants/common");

require("dotenv").config();

const { DB_URL } = process.env;

mongoose.connect(DB_URL || "mongodb://localhost:27017/thunderdome", {}, () => {
  console.log("Connected to Mongo!");
});

const nextDetails = POKEMON_DETAILS.default.map(
  (item: typeof IPokemonSeedDetails) => ({
    ...item,
    owner: ZERO_ADDRESS,
  })
);

const seedDB = async () => {
  await Product.deleteMany();
  await Product.insertMany(nextDetails);
};

seedDB()
  .then(() => mongoose.connection.close())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
