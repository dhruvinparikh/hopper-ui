import * as Types from './action-types';
import { config } from '../../../config';
import { formatEther } from '../../../services/depositService';

const initialState = {
  details:{},
  success:undefined,
  error:null,
  deposit:formatEther(config.AMOUNT),
  claimError:null,
  claimSuccess:undefined,
  claimFundsBtn:'CLAIM FUNDS',
  isClaimFundsBtnDisabled:false
};

const reducer = (state=initialState,action) => {
  switch(action.type){
  case Types.DEPOSIT_SUCCESS:
    return{
      ...state,
      success:true
    };
  case Types.DEPOSIT_UPDATE:
    return{
      ...state,
      details:action.details
    };
  case Types.DEPOSIT_ERROR:
    return{
      ...state,
      error:action.error
    };
  case Types.DEPOSIT_CLEAR:
    return{
      ...state,
      ...initialState
    };
  case Types.CLAIM_FUNDS_SUCCESS:
    return{
      ...state,
      claimSuccess:true
    };
  case Types.CLAIM_FUNDS_ERROR:
    return{
      ...state,
      claimError:action.claimError
    };
  case Types.CLEAR_CLAIM_FUNDS:
    return{
      ...state,
      claimSuccess:undefined,
      claimError:null
    };
  case Types.UPDATE_CLAIMING_MODE:
    return{
      ...state,
      claimFundsBtn:action.claimFundsBtn,
      isClaimFundsBtnEnabled:action.isClaimFundsBtnEnabled
    };
  default:
    return {
      ...state
    };
  }
};

export default reducer;