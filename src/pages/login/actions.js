import { LOGIN, LOGOUT } from './action-types';
import { login } from './api';

export function checkLogin(username, password) {
  return async dispatch => {
    const currentUser = await login(username, password);
    if (currentUser && currentUser.status === 200) {
      dispatch(updateAuth(LOGIN, currentUser.data));
      return { ...currentUser.data, success: true };
    } else {
      throw new Error('Login failed');
    }
  };
}

export function logout() {
  return async dispatch => {
    dispatch(updateAuth(LOGOUT, null));
  };
}

function updateAuth(type, payload) {
  return {
    type,
    payload
  };
}
