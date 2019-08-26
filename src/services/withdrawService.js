import { ethers } from 'ethers';
const { proof_to_flat } = require('./proofUtils');
import {config} from '../config/index';

export const withdraw = async (mixer, withdrawer, nullifier_secret, proof) => {
  const nullifier = await mixer.makeNullifierHash(nullifier_secret);
  const tx = await mixer.withdraw(
    withdrawer,
    nullifier,
    proof_to_flat(JSON.parse(proof)),
    {
      gasLimit : ethers.utils.bigNumberify(config.GAS_LIMIT),
    }
  );
  return tx;
};