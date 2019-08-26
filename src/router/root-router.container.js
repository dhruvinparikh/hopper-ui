import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RootRouter from './root-router';

// routes
import root from './root.routes';

export const mapStateToProps = () => ({
  routes: [...root]
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RootRouter)
);
