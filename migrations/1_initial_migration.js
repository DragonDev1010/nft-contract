const StarSeas = artifacts.require("StarSeasNft");

module.exports = function (deployer) {
  deployer.deploy(StarSeas, "StarSeas", "SPC");
};
