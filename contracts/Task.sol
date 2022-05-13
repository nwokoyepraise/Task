// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Task {
uint256 public amount;
    constructor (){

    }

    function receiveToken () public payable returns (uint){
        amount = msg.value;
        return msg.value;
    }

    function sendToken () public returns (bool) {
        (bool sucess,) = msg.sender.call{value: amount}("");
        return sucess;
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           