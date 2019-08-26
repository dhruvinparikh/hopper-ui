import copy from 'copy-to-clipboard';
import * as Types from './action-types';
import { getNullifier, deposit, convertStrToBase64, formatEther, convertBase64ToStr } from '../../../services/depositService';
import { getMixer, getTransactionReceipt, getLeafIndex, isTxnSuccessful } from '../../../services/mixerContract';
import { expCreateExportElement } from '../../../services/export';
import { computeProof } from '../../../services/computeProof';
import { withdraw } from '../../../services/withdrawService';
import { config } from '../../../config';

const depositSuccess = () => {
  return {
    type: Types.DEPOSIT_SUCCESS  };
};

const updateDepositDetail = (details) => {
  return {
    type: Types.DEPOSIT_UPDATE,
    details
  };
};

const depositError = (error) => {
  return{
    type: Types.DEPOSIT_ERROR,
    error
  };
};

export const clearDeposit = () => {
  return{
    type: Types.DEPOSIT_CLEAR
  };
};

const claimFundsError = (claimError) => {
  return{
    type:Types.CLAIM_FUNDS_ERROR,
    claimError
  };
};

const claimFundsSuccess = () => {
  return{
    type: Types.CLAIM_FUNDS_SUCCESS,
  };
};

export const clearClaimFunds = () => {
  return {
    type:Types.CLEAR_CLAIM_FUNDS
  };
};

export const updateFundsClaiming = (claimFundsBtn,isClaimFundsBtnEnabled) => {
  return {
    type: Types.UPDATE_CLAIMING_MODE,
    claimFundsBtn,
    isClaimFundsBtnEnabled
  };
};

export const clearAll = () => async (dispatch) => {
  dispatch(clearClaimFunds());
  dispatch(clearDeposit());
};

export const sendToMixer = (withdrawer) => async (dispatch,getState) => {
  try
  {
    const [depositer] = getState().hopperUIReducer.accounts;
    if(!depositer){
      throw new Error('Account is undefined.');
    }
    const nullifier_secret = getNullifier();
    const mixer = await getMixer();
    const tx = await deposit(
      mixer,
      depositer,
      withdrawer,
      nullifier_secret.toString(),
    );

    const secret_object_generated = {
      'withdrawer': withdrawer,
      'nullifier_secret': nullifier_secret.toString(),
      'txHash': tx.hash
    };
    const secret = convertStrToBase64(JSON.stringify(secret_object_generated));
    const {amount, unit} = formatEther(config.AMOUNT);
    dispatch(updateDepositDetail({secret,amount, unit,withdrawer}));
    dispatch(depositSuccess());
  }catch(e){
    const error = {message:e.message,
      stack: e.stack || {}};
    dispatch(depositError(error));
  }
};

export const downloadSecret = (secret) =>  ()=>{
  const element = expCreateExportElement(
    document,
    secret,
    'hopper_secret',
  );
  element.click();
};

export const copySecret = (secret) => () => {
  copy(secret);
};


export const claimFunds = (secret) => async (dispatch,getState) => {
  try
  { 
    const [account] = getState().hopperUIReducer.accounts;
    if(!account){
      throw new Error('Account is undefined.');
    }
    dispatch(updateFundsClaiming('VERIFYING THE CLAIM ...',true));
    const {nullifier_secret,txHash,withdrawer} = JSON.parse(convertBase64ToStr(secret));
    const receipt = await getTransactionReceipt(txHash);
    if(!receipt){
      throw new Error(`Transaction ${txHash} is in progress.`);
    }
    if(receipt.status === 0){
      throw new Error(`Transaction ${txHash} failed. Cannot redeem`);
    }
    if(!isTxnSuccessful(receipt)) throw Error(`Transaction ${receipt.hash} failed.`);
    const leaf_index = await getLeafIndex(receipt);
    const mixer = await getMixer();
    const proof = await computeProof(mixer,nullifier_secret.toString(),leaf_index,withdrawer);
    await withdraw(mixer, withdrawer,nullifier_secret,proof);
    dispatch(claimFundsSuccess());
  }catch(e){
    const error = {
      message:e.message,
      stack:e.stack || {}
    };
    dispatch(claimFundsError(error));
  }
  finally{
    dispatch(updateFundsClaiming('CLAIM FUNDS',false));
  }
};