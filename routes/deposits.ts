import express from "express";

const {
  createDeposit,
  getDeposits,
  removeDeposit,
} = require("../controllers/deposits");

const router = express.Router();

router.route("/").post(getDeposits);

router.route("/add").post(createDeposit);

router.route("/add").post(removeDeposit);

module.exports = router;
