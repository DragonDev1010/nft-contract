require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')

const StarSeasNFT = artifacts.require('./NFT/StarSeasNFT.sol')
const AuctionMarket = artifacts.require('./AuctionMarket.sol')
const SGEToken = artifacts.require("./SGE.sol")

contract('AuctionMarket contract', (accounts) => {
    let auctionMarket, starSeasNFT, sge, res
    let st, et
    before(async() => {
        auctionMarket = await AuctionMarket.deployed()
        starSeasNFT = await StarSeasNFT.deployed()
        sge = await SGEToken.deployed()
        st = 0
        et = 0
    })
    it('mint token', async() => {
        await starSeasNFT.mint("token 0", {from: accounts[0]})
        await starSeasNFT.mint("token 1", {from: accounts[1]})
        await starSeasNFT.mint("token 2", {from: accounts[2]})
    })
    it('Create Auction', async() => {
        await auctionMarket.createAuction(0, 0, web3.utils.toWei('10', 'ether'), st, et)
        await auctionMarket.createAuction(1, 1, web3.utils.toWei('15', 'ether'), st, et)
        await auctionMarket.createAuction(2, 0, web3.utils.toWei('20', 'ether'), st, et)
    })
    it('')
})