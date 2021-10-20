require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember pudding hope clinic swift genius'; 
let testAccounts = [
"0xb3b256dd318d3775483eeae53c6d5643f902307fbe2c1f121432c4e49db65c46",
"0x3ca20ed4b0cb59692f40bbb0f8eaf441d7dda9ded52c15a5117eb182e8c3119b",
"0x748437adce214195dd83d9bd5c72c1980ead23fe8e425c4521b6cd7d6475b938",
"0x3ead2a917e403fae77d7658a647cf7913122b8472250227f6f77955c04054bf3",
"0x65395bb69562f56d15ee34ec2dc37f36a111e0b7e131d3f7b9af891fb9f5cb56",
"0x8c2d6bb48f10fe069479806c61864c2649832e7fa88b5f3d8bd5931fefe03b4e",
"0x5c0a0136d3abe3abba05399121b548a522c759968d6531136e4f5a7f2fb18aae",
"0x82ee0443551977c56b58a9a7f0853ebb13eefd09ae74293173ff6db9f8a01771",
"0xeca51f1a6b0a7244973c576ca48082b1a5f586ffd0b632b28d0d9e5ae252414e",
"0xe90c24299d94a85e62d1e8e63b681718dccec8db9703f2fa49df4ab3536bcf2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

