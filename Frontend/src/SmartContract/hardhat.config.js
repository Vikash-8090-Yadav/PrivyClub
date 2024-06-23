
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "BaseSepolia",
  networks:{
    hardhat:{},
    BaseSepolia: {
      gasPrice:800000000,
      url: "https://sepolia.base.org" || "",
      chainId: 84532,
      accounts: ['5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702']
    },
  }
};