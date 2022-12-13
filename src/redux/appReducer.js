import { auth } from "./authReducer";

const SET_INIT = "SET-INIT";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initSuccess = () => ({ type: SET_INIT });

export const initApp = () => async (dispatch) => {
  let promise = await dispatch(auth());
  Promise.all([promise]);
  dispatch(initSuccess());
};

export default appReducer;
