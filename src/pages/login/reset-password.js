import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../services/validators';
import styles from './login.module.scss';
import { renderField } from '../../components/input';
import PropTypes from 'prop-types';
import * as Button from '../../components/button';
import { resetPassword } from './services';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      isError: false
    };
  }

  reset() {
    this.setState({
      username: '',
      password: '',
      confirmPassword: '',
      isError: false
    });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  async resetPassword() {
    let that = this;
    const { username, password, confirmPassword } = that.state;
    if (confirmPassword === password) {
      that.setState({ isError: false });
      const isSuccess = await resetPassword(username, password);
      if (isSuccess === 200) {
        that.props.history.push('/login');
      }
    } else {
      that.setState({ isError: true });
    }
  }
  back() {
    let that = this;
    that.props.history.push('/login');
  }

  render() {
    const { pristine, submitting } = this.props;
    const { username, password, confirmPassword, isError } = this.state;
    return (
      <form className={styles.resetpwd}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            justifyContent: 'center'
          }}
        >
          {isError && (
            <div>
              <h2> Password and Confirm password did not match</h2>
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
          <Field
            name="confirmPassword"
            type="password"
            component={renderField}
            value={confirmPassword}
            label="Confirm Password"
            validate={[required]}
            onChange={e => this.onChange(e)}
          />

          <div style={{ textAlign: 'left', width: '80%' }}>
            <Button.Primary
              text="Reset Password"
              type="button"
              onClick={() => {
                this.resetPassword();
              }}
              buttonSize={Button.SIZES.LARGE}
              disabled={pristine || submitting}
            />
            <Button.Warning
              text="Back"
              type="button"
              onClick={() => {
                this.back();
              }}
              buttonSize={Button.SIZES.LARGE}
            />
          </div>
        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'resetpassword' // a unique identifier for this form
})(ResetPassword);
