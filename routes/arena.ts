import express from "express";

const { enterArena, claimExpPoints } = require("../controllers/arena");

const router = express.Router();

router.route("/enter").post(enterArena);

router.route("/claim").post(claimExpPoints);

module.exports = router;
