const StarSeasNFT = artifacts.require("StarSeasNFT")
const accessControl = artifacts.require("StarSeasAccessControl")

module.exports = async function(deployer) {
    deployer.deploy(accessControl)
        .then(async (starSeasAccess) => {
            await deployer.deploy(StarSeasNFT, "StarSeas", "SGE", starSeasAccess.address)
        })
}