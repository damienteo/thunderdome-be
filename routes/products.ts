const express = require("express");

const {
  createSingleProduct,
  getSingleProduct,
  getProducts,
} = require("../controllers/products");

const router = express.Router();

router.route("/:id").get(getSingleProduct);

router.route("/").get(getProducts);

router.route("/").post(createSingleProduct);

module.exports = router;
