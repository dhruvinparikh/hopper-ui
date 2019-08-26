import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Router from './router';


export const mapStateToProps = () => ({
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Router)
);
