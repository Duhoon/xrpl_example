// SPDX-Licensed-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FungibleToken is ERC20 {
    constructor (
        string memory name_, 
        string memory symbol_,
        uint256 totalSupply_
    ) ERC20(name_, symbol_ ) {
        _mint(_msgSender(), totalSupply_);
    }
}