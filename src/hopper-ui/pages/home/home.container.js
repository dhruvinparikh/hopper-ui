import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home.component';

const mapStateToProps = () => {
  return {};
};

const mapDispatachToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatachToProps
  )(Home)
);
