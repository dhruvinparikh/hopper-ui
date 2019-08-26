import * as Types from './action-types';
import { labels } from '../constants/navigation';

const initialState = {
  labels,
  label: labels[0],
  accounts:[],
  pendingTransactions:0,
  totalTransactions:0,
  lastTransaction:{amount:'0',unit:''},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case Types.CHANGE_PAGE:
    return {
      ...state,
      label: action.label
    };
  case Types.SET_ACCOUNTS:
    return{
      ...state,
      accounts:action.accounts
    };
  case Types.SET_LIQUIDITY_POOL:
    return{
      ...state,...{
        pendingTransactions : action.pendingTransactions,
        totalTransactions:action.totalTransactions,
        lastTransaction:action.lastTransaction
      }
    };
  default:
    return {
      ...state
    };
  }
};

export default reducer;
