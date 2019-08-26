import { connect } from 'react-redux';
import Login from './login';
import { checkLogin } from './actions';

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  checkLogin: (username, password) => dispatch(checkLogin(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
