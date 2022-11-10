import { Request, Response, NextFunction } from "express";

import { PokemonType, ArenaOutcome } from "../utils/interfaces/IArena";

const asyncHandler = require("../utils/methods/asyncHandler");

const getRandomIntTo2 = () => {
  return Math.floor(Math.random() * 3);
};

const serverOptions = [PokemonType.PLANT, PokemonType.FIRE, PokemonType.WATER];

const winConditions: Record<string, Record<string, string>> = {
  [PokemonType.PLANT]: {
    [PokemonType.PLANT]: ArenaOutcome.DRAW,
    [PokemonType.FIRE]: ArenaOutcome.LOSE,
    [PokemonType.WATER]: ArenaOutcome.WIN,
  },
  [PokemonType.FIRE]: {
    [PokemonType.PLANT]: ArenaOutcome.WIN,
    [PokemonType.FIRE]: ArenaOutcome.DRAW,
    [PokemonType.WATER]: ArenaOutcome.LOSE,
  },
  [PokemonType.WATER]: {
    [PokemonType.PLANT]: ArenaOutcome.LOSE,
    [PokemonType.FIRE]: ArenaOutcome.WIN,
    [PokemonType.WATER]: ArenaOutcome.DRAW,
  },
};

// @desc    Enter Arena with Type
// @route   POST /api/v1/arena
// @access  Public
exports.enterArena = asyncHandler(
  async (
    req: Request<{}, {}, { type: PokemonType; address: string }>,
    res: Response,
    next: NextFunction
  ) => {
    const { type, address } = req.body;

    const randomInt = getRandomIntTo2();

    const serverDecision = serverOptions[randomInt];

    const outcome: string = winConditions[type][serverDecision];

    const data = { outcome, serverAction: serverDecision };

    res.status(200).json({
      success: true,
      data,
    });
  }
);
