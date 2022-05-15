require('dotenv').config();
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.7',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YTq_ijS7YdrXy_ChRAzpsPDBu73hNpHa',
      accounts: [ process.env.PRIVATE_KEY ]
    }
  }
}