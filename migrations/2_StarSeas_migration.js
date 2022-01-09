const AccessControl = artifacts.require("StarSeasAccessControl")
const StarSeasNFT = artifacts.require("./NFT/StarSeasNFT")
const SGEToken = artifacts.require("SGE")
const Marketplace = artifacts.require("Marketplace")

module.exports = async function(deployer) {
    let access, nft, marketplace
    await deployer.deploy(AccessControl)
    await deployer.deploy(StarSeasNFT, "StarSeas", "SGE", AccessControl.address)
    await deployer.deploy(SGEToken, "SGE Token", "SGE", web3.utils.toWei('250', 'kether'))
    await deployer.deploy(Marketplace, StarSeasNFT.address, SGEToken.address)
}