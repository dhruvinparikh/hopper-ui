import axios from 'axios';
import { baseOptions } from '../../config';

export const login = (username, password) => {
  return axios
    .post(`${baseOptions.url}/auth/login`, {
      username: username,
      password: password
    })
    .catch(err => {
      return err.response;
    });
};

export const resetpassword = (username, password) =>
  axios.put(`${baseOptions.url}/users/reset`, {
    username: username,
    password: password
  });
