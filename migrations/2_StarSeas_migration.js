const StarSeasNFT = artifacts.require("StarSeasNFT")

module.exports = function(deployer) {
    deployer.deploy(StarSeasNFT, "StarSeas", "SGE")
}