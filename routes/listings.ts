import express from "express";

const {
  createListing,
  getListings,
  removeListing,
  updateListing,
  completeListing,
} = require("../controllers/listings");

const router = express.Router();

router.route("/").post(getListings);

router.route("/add").post(createListing);

router.route("/update").patch(updateListing);

router.route("/complete").delete(completeListing);

router.route("/remove").delete(removeListing);

module.exports = router;
