require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/nViNxPZFReBvRdbyLMnU43iKp3E3Wlyc",
        blockNumber: 16484809
        //blockNumber: 15259103 //WBTC
      }
    }
  }
};
