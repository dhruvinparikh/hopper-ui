import { connect } from 'react-redux';
import HopperUI from './hopper-ui.component';
import { withRouter } from 'react-router-dom';
import {changePage,setAccounts,getAndSetLiquidityPool} from './actions';
import home from './hopper-ui.routes';

export const mapStateToProps = (state) => ({
  routes: [...home],
  labels: state.hopperUIReducer.labels,
  label: state.hopperUIReducer.label
});

const mapDispatchToProps = {
  changePage,
  setAccounts,
  getAndSetLiquidityPool
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HopperUI)
);
