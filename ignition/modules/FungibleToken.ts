import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FungibleTokenModule = buildModule("FungibleToken", (m)=>{
    const FungibleToken = m.contract("FungibleToken", [
        "XRPL Test Token",
        "XTT",
        777_000_000_000_000000000000000000n
    ]);

    return {FungibleToken};
})

export default FungibleTokenModule;