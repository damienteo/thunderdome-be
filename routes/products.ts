import express from "express";

const {
  createSingleProduct,
  getSingleProduct,
  getSingleProductJson,
  updateSingleProductOwner,
  getProducts,
} = require("../controllers/products");

const router = express.Router();

router.route("/:name").get(getSingleProduct);

router.route("/json/:name").get(getSingleProductJson);

router.route("/").get(getProducts);

router.route("/update-owner").patch(updateSingleProductOwner);

// router.route("/").post(createSingleProduct);

module.exports = router;
