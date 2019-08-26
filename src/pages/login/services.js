import { resetpassword } from './api';

export async function resetPassword(username, password) {
  const user = await resetpassword(username, password);
  return user.status;
}
