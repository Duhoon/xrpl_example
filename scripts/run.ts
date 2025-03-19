import { Wallet, Client, Payment, convertStringToHex } from 'xrpl';
import * as dotenv from 'dotenv';
dotenv.config();

(async ()=>{
    const wallet = Wallet.fromSecret(process.env.XRPL_PK!);
    const client = new Client(process.env.XRPL_RPC_URL!);
    await client.connect();

    console.log(`My Balance: ${await client.getXrpBalance(wallet.address)}`);

    // Create the payment transaction object

    const payment: Payment = {
        TransactionType: "Payment",
        Account: wallet.address, // Sender's address
        Amount: "50000000", // 50 XRP in drops
        
        Destination: "rsCPY4vwEiGogSraV9FeRZXca6gUBWZkhg",
        Memos: [
        {
            Memo: {
            // hex(destination_address)
            MemoType: Buffer.from("destination_address")
                .toString("hex")
                .toUpperCase(),
            // Destination contract address (hexadecimal, without 0x prefix, and toUpperCase)
            MemoData: "f39Fd6e51aad88F6F4ce6aB8827279cffFb92266".toUpperCase(),
            },
        },
        {
            Memo: {
            // hex(destination_chain)
            MemoType: Buffer.from("destination_chain")
                .toString("hex")
                .toUpperCase(),
            // The destination chain ID on the Axelar network (hexadecimal)
            // for Devnet
            MemoData: Buffer.from("xrpl-evm-test-1").toString("hex").toUpperCase(),
            },
        },
        ],
    };
  
    // Autofill transaction
    const transaction = await client.autofill(payment);
    
    // Sign transaction
    const signedTransaction = wallet.sign(transaction).tx_blob;
    
    // Submit transaction
    const result = await client.submit(signedTransaction);

    console.log(result);
})();
