import { Request, Response, NextFunction } from "express";
const ethers = require("ethers");

import { PokemonType, ArenaOutcome } from "../utils/interfaces/IArena";

const asyncHandler = require("../utils/methods/asyncHandler");
const ArenaJson = require("../utils/abis/Arena.json");

const { WEB_SOCKET_PROVIDER, DUMMY_KEY, ARENA_ADDRESS } = process.env;

const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

const signer = new ethers.Wallet(DUMMY_KEY, provider);

const arenaContract = new ethers.Contract(
  ARENA_ADDRESS,
  ArenaJson.abi,
  provider
);

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
// @route   POST /api/v1/arena/enter
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

    // Log game score with SC

    const { chainId } = await provider.getNetwork();

    const walletAddress = await signer.getAddress();

    const estimatedGasLimit = await arenaContract.estimateGas.logGameScore(
      address,
      1
    );

    const unsignedTransaction =
      await arenaContract.populateTransaction.logGameScore(address, 1);
    unsignedTransaction.chainId = chainId;
    unsignedTransaction.gasLimit = estimatedGasLimit;
    unsignedTransaction.gasPrice = await provider.getGasPrice();
    unsignedTransaction.nonce = await provider.getTransactionCount(
      walletAddress
    );

    const approveTxSigned = await signer.signTransaction(unsignedTransaction);

    const submittedTx = await provider.sendTransaction(approveTxSigned);
    const approveReceipt = await submittedTx.wait();

    if (approveReceipt.status === 0) {
      res.status(500).json({
        success: false,
        error: "Approve Transaction Failed",
      });
    }

    // End of interaction with SC

    const data = { outcome, serverAction: serverDecision };

    res.status(200).json({
      success: true,
      data,
    });
  }
);

// @desc    Enter Arena with Type
// @route   POST /api/v1/arena/claim
// @access  Public
exports.claimExpPoints = asyncHandler(
  async (
    req: Request<{}, {}, { address: string }>,
    res: Response,
    next: NextFunction
  ) => {
    const { address } = req.body;

    const { chainId } = await provider.getNetwork();

    const score = await arenaContract.gameScores(address);
    const claimed = await arenaContract.userClaimed(address);

    const claimable = Number(score) - Number(claimed);

    const hash = await arenaContract.getMessageHash(address, claimable);

    const signature = await signer.signMessage(ethers.utils.arrayify(hash));

    const walletAddress = await signer.getAddress();
    // By right, player can claim on their own with provided signature
    // But this is more of a demonstration as to how we can help players claim points while we pay gas fees on their behalf
    // To be honest, we can claim points while logging above, but this still outsources the claiming of points
    // In addition, claiming between multiple logging of game scores also 'batches' the claiming of exp points, resulting in gas savings
    const estimatedGasLimit = await arenaContract.estimateGas.claimPrize(
      address,
      score,
      signature
    );

    const unsignedTransaction =
      await arenaContract.populateTransaction.claimPrize(
        address,
        score,
        signature
      );
    unsignedTransaction.chainId = chainId;
    unsignedTransaction.gasLimit = estimatedGasLimit;
    unsignedTransaction.gasPrice = await provider.getGasPrice();
    unsignedTransaction.nonce = await provider.getTransactionCount(
      walletAddress
    );

    const approveTxSigned = await signer.signTransaction(unsignedTransaction);
    const submittedTx = await provider.sendTransaction(approveTxSigned);
    const approveReceipt = await submittedTx.wait();

    if (approveReceipt.status === 0) {
      res.status(500).json({
        success: false,
        error: "Approve Transaction Failed",
      });
    }

    res.status(200).json({
      success: true,
    });
  }
);
