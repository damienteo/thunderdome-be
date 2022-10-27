import express from "express";

const {
  createDeposit,
  getDeposits,
  removeDeposit,
} = require("../controllers/deposits");

const router = express.Router();

router.route("/").post(getDeposits);

router.route("/add").post(createDeposit);

router.route("/remove").delete(removeDeposit);

module.exports = router;
