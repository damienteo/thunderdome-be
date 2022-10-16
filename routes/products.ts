const express = require("express");

const {
  createSingleProduct,
  getSingleProduct,
  getSingleProductJson,
  getProducts,
} = require("../controllers/products");

const router = express.Router();

router.route("/:name").get(getSingleProduct);

router.route("/json/:name").get(getSingleProductJson);

router.route("/").get(getProducts);

// router.route("/").post(createSingleProduct);

module.exports = router;
