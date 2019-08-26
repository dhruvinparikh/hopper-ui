import * as Types from './action-types';
import { getLiquidityPool } from '../services/liquidity-pool';

const dispatchChangePage = label => {
  return {
    type: Types.CHANGE_PAGE,
    label
  };
};

const setLiquidityPool = (pendingTransactions,totalTransactions,lastTransaction) => {
  return {
    type: Types.SET_LIQUIDITY_POOL,
    pendingTransactions,
    totalTransactions,
    lastTransaction
  };
};

export const setAccounts = accounts => {
  return {
    type: Types.SET_ACCOUNTS,
    accounts
  };
};

export const changePage = index => (dispatch, getState) => {
  const { labels } = getState().hopperUIReducer;
  dispatch(dispatchChangePage(labels[index]));
};

export const getAndSetLiquidityPool = () => async (dispatch) => {
  const {totalTransactions,pendingTransactions,lastTransaction} = await getLiquidityPool();
  dispatch(setLiquidityPool(pendingTransactions,totalTransactions,lastTransaction));
};