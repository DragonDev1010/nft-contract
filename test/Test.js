require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')

const Nft = artifacts.require('./Nft.sol')

contract('Nft contract', (accounts) => {
    let nft
    let res
    before(async() => {
        nft = await Nft.deployed()
    })
    it('Test setTokenURI', async() => {
        res = await nft.mint(accounts[0], 0);
        await nft.setBaseURI("https://ipfs.io/ipfs/")
        res = await nft.tokenURI.call(0)
        console.log("Base Token URI: ", res)
    })
})