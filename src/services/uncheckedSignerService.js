// eslint-disable-next-line no-unused-vars
let signer;
const ethers = require('ethers');
export class UncheckedJsonRpcSigner extends ethers.Signer {


  constructor(signer) {
    super();
    ethers.utils.defineReadOnly(this, 'signer', signer);
    ethers.utils.defineReadOnly(this, 'provider', signer.provider);
  }

  getAddress(){
    return this.signer.getAddress();
  }

  sendTransaction(transaction) {
    return this.signer.sendUncheckedTransaction(transaction).then((hash) => {
      return {
        hash: hash,
        nonce: null,
        gasLimit: null,
        gasPrice: null,
        data: null,
        value: null,
        chainId: null,
        confirmations: 0,
        from: null,
        wait: (confirmations) => { return this.provider.waitForTransaction(hash, confirmations); }
      };
    });
  }

  signMessage(message){
    return this.signer.signMessage(message);
  }
}