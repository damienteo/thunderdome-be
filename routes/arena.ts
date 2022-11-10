import express from "express";

const { enterArena } = require("../controllers/arena");

const router = express.Router();

router.route("/enter").post(enterArena);

module.exports = router;
