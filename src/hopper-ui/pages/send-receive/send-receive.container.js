import { connect } from 'react-redux';
import SendReceive from './send-receive.component';
import {sendToMixer,clearDeposit,downloadSecret,copySecret,claimFunds,clearClaimFunds,clearAll} from './actions';
import {setAccounts,getAndSetLiquidityPool} from '../../actions';
const mapStateToProps = (state) => {
  return {
    details:state.sendReceiveReducer.details,
    error: state.sendReceiveReducer.error,
    success: state.sendReceiveReducer.success,
    deposit:state.sendReceiveReducer.deposit,
    pendingTransactions:state.hopperUIReducer.pendingTransactions,
    totalTransactions:state.hopperUIReducer.totalTransactions,
    lastTransaction:state.hopperUIReducer.lastTransaction,
    claimSuccess:state.sendReceiveReducer.claimSuccess,
    claimError:state.sendReceiveReducer.claimError,
    claimFundsBtn:state.sendReceiveReducer.claimFundsBtn,
    isClaimFundsBtnEnabled:state.sendReceiveReducer.isClaimFundsBtnEnabled
  };
};

const mapDispatchToProps = {
  sendToMixer,
  clearDeposit,
  downloadSecret,
  copySecret,
  claimFunds,
  clearClaimFunds,
  clearAll,
  setAccounts,
  getAndSetLiquidityPool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendReceive);
