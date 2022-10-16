const ethers = require("ethers");
const ThunderDomeNFTJson = require("../abis/ThunderDomeNFT.json");

require("dotenv").config();

const { WEB_SOCKET_PROVIDER } = process.env;

export const listenForTransfer = async () => {
  const ThunderDomeNFTAddress = process.env.THUNDERDOME_NFT_ADDRESS;
  const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

  const contract = new ethers.Contract(
    ThunderDomeNFTAddress,
    ThunderDomeNFTJson.abi,
    provider
  );

  contract.on("Transfer", (from: string, to: string, tokenId: number) => {
    const info = {
      from,
      to,
      tokenId,
    };
    console.log({ info });
  });
};
