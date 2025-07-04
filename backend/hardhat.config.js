require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig  534351 sepolia scroll*/
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17"
      },
      {
        version: "0.6.11"
      }
    ]
  },
  networks: {
    sepolia: {
      url: process.env.NODE_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.API_KEY
    }
  }
};