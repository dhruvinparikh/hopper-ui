const ethers = require('ethers');
import {config} from '../config/index';
import {UncheckedJsonRpcSigner} from './uncheckedSignerService';

const AbiDecoder = require('abi-decoder');

const provider = new ethers.providers.Web3Provider(
  window.web3.currentProvider,config.PROVIDER
);
// TODO:KP Below method is not used anywhere pls remove
export const getMixer = async () => {
  const signer = new UncheckedJsonRpcSigner(provider.getSigner());
  const contract = new ethers.Contract(config.CONTRACT_ADDRESS, config.ABI, provider);
  const mixer = contract.connect(signer);
  return mixer;
};

// we should create services/blockchain.js and all outgoing calls to blockchain should be performed there
// meanwhile adding leaf index extractor here
export const getLeafIndex = (transactionReceipt) => {
  try {
    AbiDecoder.addABI(config.ABI);
    const decodedLogs = AbiDecoder.decodeLogs(transactionReceipt.logs);
    const leafAddedEvents = decodedLogs.filter(l => l.name === 'LeafAdded')[0].events;
    const leafIndex = leafAddedEvents.filter(e => e.name === '_leafIndex')[0].value;
    return leafIndex;
  }catch(e){
    // eslint-disable-next-line no-console
    console.log(`Error while calculating leaf index for receipt ${transactionReceipt}`);
    return null;
  }
};

export const getTransactionReceipt = async (hash) => {
  const receipt = await provider.waitForTransaction(hash);
  return receipt;
};

export const isTxnSuccessful = async (receipt) => {
  const { status } = receipt;
  return status === 1;
};




