var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "property common license code trigger liquid science mother swamp reopen file scale";

module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "127.0.0.1",
               port: 8545,
               network_id: "*" // Match any network id
          },
          ropsten: {
               provider: function(){
                    return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/d24fd15fbb9541ffac7a558172e9705a')
               },
               network_id: '3',
               gas: 450000,
               gasPrice: 10000000000,
          }
     }
};
