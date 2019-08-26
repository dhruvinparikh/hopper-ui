import Login from './';
import ResetPassword from './reset-password';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    isSecure: false
  },
  {
    name: 'resetpassword',
    path: '/reset-password',
    component: ResetPassword,
    isSecure: false
  }
];
