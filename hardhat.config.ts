import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    xprlTestEVM: {
      url: process.env.XRPL_EVM_RPC_URL,
      accounts: [process.env.EVM_PK!],
    }
  }
};

export default config;
