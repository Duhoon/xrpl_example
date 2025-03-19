// SPDX-Licensed-Identifier: UNLICENSED
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NonFungibleToken is ERC721, Ownable {
    constructor (
        string memory name_, 
        string memory symbol_
    ) ERC721(name_, symbol_) Ownable(_msgSender()) {}

    function mint(address to, uint256 tokenId) public virtual onlyOwner returns (bool) {
        _mint(to, tokenId);
        return true;
    }
}