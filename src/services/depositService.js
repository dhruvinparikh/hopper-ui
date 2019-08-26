const ethers = require('ethers');
import {config} from '../config/index';

export const getNullifier =  () => {
  const nullifier = ethers.utils.bigNumberify(ethers.utils.randomBytes(30));
  return nullifier;
};
export const deposit = async (mixer, depositer, withdrawer, nullifier_secret) => {
  const leaf = await mixer.makeLeafHash(nullifier_secret, withdrawer);
  const tx = await mixer.commit(leaf, depositer, {
    value: ethers.utils.bigNumberify(config.AMOUNT),
    gasLimit: ethers.utils.bigNumberify(config.GAS_LIMIT),
  });
  return tx;
};

export const convertStrToBase64 = (value) => {
  const result = window.btoa(value);
  return result;
};

export const convertBase64ToStr = (value) => {
  const result = window.atob(value.toString().trim());
  return result;
};

export const formatEther = (wei) => {
  const amount = ethers.utils.formatEther(wei);
  const unit = ethers.constants.EtherSymbol;
  return {amount,unit};
};