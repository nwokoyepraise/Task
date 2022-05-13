const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
const { parseEther } = require("ethers/lib/utils");

describe("Task Contract", function () {
  let addr1, addr2, Task, owner;
  let deploy;

  beforeEach(async function () {
    Task = await ethers.getContractFactory("Task");
    [owner, addr1, addr2] = await ethers.getSigners();

    deploy = await Task.deploy();
  });

  describe("Receive", function () {
    it("should be able to receive ether", async function () {
      let data = await deploy.receiveToken({ value: ethers.utils.parseEther("1") });
      let amount = await deploy.amount();

      expect(data.value).equal(amount);
    });
  });
  
  describe("Send", function () {
    it("it should be able to send ether", async function () {
      let data = await deploy.callStatic.sendToken();
     expect(data).to.equal(true);
    });
  });
});
