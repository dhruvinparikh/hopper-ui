import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { required } from '../../services/validators';
import styles from './login.module.scss';
import { renderField } from '../../components/input';
import * as Button from '../../components/button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', isError: false, msg: '' };
  }

  reset() {
    this.setState({ username: '', password: '', isError: false, msg: '' });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  async login() {
    const { username, password } = this.state;
    const { checkLogin, history, location } = this.props;
    const currentUser = await checkLogin(username, password);
    if (currentUser.error) {
      this.setState({ isError: true, msg: currentUser.error });
    } else if (currentUser.success) {
      var { from } = location.state || { from: { pathname: '/' } };
      history.push(from);
    }
  }
  resetPassword() {
    this.props.history.push('/reset-password');
  }
  render() {
    const { pristine, submitting } = this.props;
    const { username, password, isError, msg } = this.state;
    return (
      <form className={styles.login}>
        <div>
          {isError && (
            <div>
              <h2> {msg} </h2>
            </div>
          )}

          <Field
            name="username"
            type="text"
            component={renderField}
            value={username}
            label="UserName"
            validate={[required]}
            onChange={e => this.onChange(e)}
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            value={password}
            label="Password"
            validate={[required]}
            onChange={e => this.onChange(e)}
          />
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            <Button.Primary
              text="Login"
              type="button"
              onClick={() => {
                this.login();
              }}
              buttonSize={Button.SIZES.LARGE}
              disabled={pristine || submitting}
            />
            <Button.Default
              text="Cancel"
              type="button"
              onClick={() => {}}
              buttonSize={Button.SIZES.LARGE}
              disabled={pristine || submitting}
            />
            <div
              className={styles.reset}
              onClick={() => {
                this.resetPassword();
              }}
            >
              Reset Password
            </div>
          </div>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  checkLogin: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  history: PropTypes.object,
  location: PropTypes.object
};

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(Login);
