import { steps } from '../../../constants/steps';

const initialState = {
  steps
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};

export default reducer;
