require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strong rival situate under gentle light army gas'; 
let testAccounts = [
"0xa1e1ecacf0cb1408edc5d20d7be09a2eb566b9910068f848fd47cf4b56a4051e",
"0x3754563fac15238715a6ba7fbd667070ad12e551daa45129d74a0b26db52d16f",
"0xdc910853467f77d6e3bc77d8414cb4c592012db2bd9de235403d22736ff5c57e",
"0x61a85ca27522a23b33039c0e97e9b44d71176aa275b2557964de0ee0f23ae32f",
"0x0a3468352259c8d9863b20cc6d8e38f06dbe53839971fe845ad5ab293dc3acb4",
"0xb7741a6211420df719d5761d57836f81316b038942f8b737dbb533c2459b24c5",
"0x64906ea9a2e3a1f037ad3401787274c5297d2661f7013313c587401a431dc46a",
"0x6533fef4006bebdec4d96863084dad66a742ab2b1bf2c17b4b09fc3078cf1e47",
"0x11d53716752ffcd06e283039fd9c65fd85ce97084b9ba3f04b61deb271a9d26f",
"0xc5061a7ce27cc8fec8d5a44602dc1767e82d1c82e6cb6487d88500f5794b2fce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
