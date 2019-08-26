import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';
// reducers
import { persistReducer } from 'redux-persist';
import { authReducer } from '../pages/login/reducer';
import { authPersistConfig } from '../config/persist-config';
import { reducer as reduxFormReducer } from 'redux-form';
// import homeReducer from '../pages/home/reducer';
import hopperUIReducer from '../hopper-ui/reducer';
import howItWorksReducer from '../hopper-ui/pages/how-it-works/reducer';
import faqsReducer from '../hopper-ui/pages/faqs/reducer';
import sendReceiveReducer from '../hopper-ui/pages/send-receive/reducer';

const createReducer = history => {
  return combineReducers({
    form: reduxFormReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    router: connectRouter(history),
    hopperUIReducer,
    howItWorksReducer,
    faqsReducer,
    sendReceiveReducer,
    browser: createResponsiveStateReducer({
      mobile: 768,
      tablet: 1024,
      desktop: 1130
    })
  });
};

export default createReducer;
