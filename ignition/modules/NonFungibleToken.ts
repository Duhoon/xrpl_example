import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NonFungibleTokenModule = buildModule("NonFungibleToken", (m)=>{
    const NonFungibleToken = m.contract("NonFungibleToken", [
        "XRPL Test NonFungible Token",
        "XTNT",
    ])

    return { NonFungibleToken }
});

export default NonFungibleTokenModule;