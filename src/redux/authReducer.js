import { authAPI } from "../api/api.js";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const authData = (data, isAuth) => ({
  type: SET_USER_DATA,
  data,
  isAuth,
});

export const auth = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    dispatch(authData(data.data, true));
  }
};

export const login = (userData) => {
  return async (dispatch) => {
    let data = await authAPI.login(userData);
    if (data.resultCode === 0) {
      dispatch(auth());
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    let data = await authAPI.delete();
    if (data.resultCode === 0) {
      return dispatch(authData(null, false));
    }
  };
};

export default authReducer;
