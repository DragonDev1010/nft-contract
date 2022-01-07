require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')

const StarSeasNft = artifacts.require('./NFT/StarSeasNFT.sol')

contract('StarSeasNFT', (accounts) => {
    let starSeasNFT, res
    before(async() => {
        starSeasNFT = await StarSeasNft.deployed()
    })
    it('mint NFT', async() => {
        res = await starSeasNFT.mint("token 1")
        console.log(res.logs[0].args)
        await starSeasNFT.mint("token 2")
        console.log(res.logs[0].args)
        await starSeasNFT.mint("token 3")
    })
    it('set base uri', async() => {
        await starSeasNFT.setBaseURI('https://ipfs/')
        res = await starSeasNFT.tokenURI(0)
        console.log(res)
        res = await starSeasNFT.tokenURI(1)
        console.log(res)
        res = await starSeasNFT.tokenURI(2)
        console.log(res)
    })
    it('Access Controller Test', async() => {
        res = await starSeasNFT.accessControls.call()
        console.log(res)
    })
})