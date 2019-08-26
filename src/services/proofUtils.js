list_flatten = l => {
  return [].concat.apply([], l);
};
    
module.exports = {
  proof_to_flat: proof => {
    return list_flatten([proof.A, list_flatten(proof.B), proof.C]);
  }
};