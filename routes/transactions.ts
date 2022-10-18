import express from "express";

const { getTransactions } = require("../controllers/transactions");

const router = express.Router();

router.route("/").get(getTransactions);

module.exports = router;
