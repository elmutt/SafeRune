# SafeRune token

This erc20 token can wrap an unwrap erc20 rune (`0x3155ba85d5f96b2d030a4966af206230e46849cb`) in order to protect against a security vulnerability that allows malicious contracts to steal your erc20 rune. A description of the vulnerability can be found here: https://etherscan.io/address/0x4bf5dc91e2555449293d7824028eb8fe5879b689#comments

- Mint new saferun by calling `MintSaferun` 
- Redeem erc20 rune by calling `RedeemErc20Rune`

It's a nice way to hold your erc20 rune in a wallet you use regularly with untrusted contracts and know it cant be stolen. Mint SafeRune to store long term in your wallet, redeem erc20 rune when you need to trade it.

The erc20 token code is copied from a very simple tried & true token -- Salt (0x4156D3342D5c385a87D264F90653733592000581) modified to work with the latest solidity version and then added the `MintSaferun` and `RedeemErc20Rune` functions.

## Deploying

1) install truffle globally `$ npm install -g truffle`
2) run `yarn`
3) create `.env` file wikth eth node urls and mnemonic used to pay for deployment.
4) modify `truffle-config.js` and put a reasonable gas price.
5) run `yarn deploy:testnet` to dpeloy to ropsten or `yarn deploy:mainnet` for mainnet.

