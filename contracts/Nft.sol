// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract Nft is ERC721 {
    constructor(string memory name_, string memory symbol_) public ERC721(name_, symbol_) {

    }
}