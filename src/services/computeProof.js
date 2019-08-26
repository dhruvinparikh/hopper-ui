const {toBN} = require('web3-utils');
const { proove } =  require('./wasm/proover');


/**
 * Below code is not tested. Please integrate carefully.
 *
 * @param {} mixerContract
 * @param {*} _nullifier_secret
 * @param {*} _leaf_index
 * @param {*} _withdrawer
 */
export const computeProof = async (
  mixerContract,
  _nullifier_secret,
  _leaf_index,
  _withdrawer
) => {

  // Compute merkle path neighbour hashes
  const path_neighbours = await mixerContract.getMerklePath(_leaf_index);
  // Compute merkle root
  const merkle_root = await mixerContract.getRoot();
  // Compute nullifier
  const nullifier = await mixerContract.makeNullifierHash(_nullifier_secret.toString());
  const base16args = {
    root: '0x' + toBN(merkle_root).toJSON(),
    wallet_address: '0x' + toBN(_withdrawer).toJSON(),
    nullifier: '0x' + toBN(nullifier).toJSON(),
    nullifier_secret: '0x' + toBN(_nullifier_secret).toJSON(),
    address: parseInt(_leaf_index), // will manually convert this to leaf index for now
    path: path_neighbours.map(h => '0x' + toBN(h).toJSON())
  };
  //check to see if nullifier is spent
  const isSpent = await mixerContract.isSpent(nullifier);
  if (isSpent) {
    throw new Error('nullifier is spent');
  } else {
    const proof_json = await proove(base16args);
    return proof_json;
  }
};

