import SecureRoute from './secure-route';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecureRoute);
