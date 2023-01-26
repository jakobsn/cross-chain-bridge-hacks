//Nomad

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_API_KEY,
        //blockNumber: 16484809 Run this blockheigt to fail the tests.
        blockNumber: 15259103 //
      }
    }
  }
};
