// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
contract Nft is ERC721, Ownable{
    string public baseTokenURI;
    constructor(string memory name_, string memory symbol_) public ERC721(name_, symbol_) Ownable(){
        baseTokenURI = "base";
    }
    function _baseURI() internal view override returns(string memory) {
        return baseTokenURI;
    }
    function setBaseURI(string memory _new_uri) public onlyOwner {
        baseTokenURI = _new_uri;
    }
    function mint(address _to, uint256 _tokenId) public {
        _mint(_to, _tokenId);
    }
}