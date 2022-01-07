require('chai')
    .use(require('chai-as-promised'))
    .should()

const {assert} = require('chai')

const StarSeas = artifacts.require('./StarSeasNft.sol')

contract('StarSeas contract', (accounts) => {
    let starSea
    let res
    before(async() => {
        starSea = await StarSeas.deployed()
    })
    it('contract constructor ', async() => {
        res = await starSea.name()
        assert.equal(res, 'StarSeas', 'nft name is correct')
        res = await starSea.symbol()
        assert.equal(res, 'SPC', 'nft symbol is correct')
    })
})