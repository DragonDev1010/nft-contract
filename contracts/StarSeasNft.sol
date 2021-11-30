// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract StarSeasNft is ERC721, Ownable {
    string public baseTokenURI;
    constructor(string memory symbol_, string memory name_) ERC721(symbol_, name_) {
        
    }
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

}
