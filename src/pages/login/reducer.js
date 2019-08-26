import { persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist';
import { authPersistConfig } from '../../config/persist-config';
import { LOGIN, LOGOUT } from './action-types';

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REHYDRATE:
    return {
      ...state,
      currentUser:
          action.payload !== undefined ? action.payload.currentUser : null
    };
  case LOGIN:
    return {
      ...state,
      currentUser: action.payload,
      isLoggedIn: true
    };
  case LOGOUT:
    return {
      ...state,
      currentUser: null,
      isLoggedIn: false
    };
  default:
    return state;
  }
};

export const authReducer = persistReducer(authPersistConfig, AuthReducer);
