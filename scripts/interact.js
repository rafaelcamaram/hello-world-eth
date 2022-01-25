const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
}

main();