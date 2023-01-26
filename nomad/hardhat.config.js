require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_API_KEY,
        blockNumber: 16484809
        //blockNumber: 15259103 //WBTC
      }
    }
  }
};
