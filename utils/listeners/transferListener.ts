const ethers = require("ethers");

const ThunderDomeNFTJson = require("../abis/ThunderDomeNFT.json");
const { Product } = require("../../models/products");

require("dotenv").config();

const { WEB_SOCKET_PROVIDER, THUNDERDOME_NFT_ADDRESS } = process.env;

export const listenForTransfer = async () => {
  const ThunderDomeNFTAddress = THUNDERDOME_NFT_ADDRESS;
  const provider = new ethers.providers.WebSocketProvider(WEB_SOCKET_PROVIDER);

  const contract = new ethers.Contract(
    ThunderDomeNFTAddress,
    ThunderDomeNFTJson.abi,
    provider
  );

  contract.on("Transfer", async (from: string, to: string, tokenId: number) => {
    const info = {
      from,
      to,
      tokenId: ethers.utils.formatUnits(tokenId, 0),
    };

    const tokenURI = await contract.tokenURI(info.tokenId);

    const splitURI = tokenURI.split("/");
    const name = splitURI[splitURI.length - 1];

    const data = await Product.findOne({ name });

    if (data) {
      await Product.findOneAndUpdate(
        { name },
        { owner: to, tokenId: info.tokenId }
      );
    }
  });

  console.log("Running Transfer Listener");
};
