export const candyMachineAddress = "0xa6291c2d52822429b6f66f7090e30a0bfd381428805074621aaf7a8ef463a3b3";
export const collectionName = "Jimmy"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs//QmYDf8imeLKgZcF9E3gXjV4weF9R7W8vyhQEz65bnM3BeD";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
