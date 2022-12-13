import { profileAPI } from "../api/api.js";

const ADD_POST = "ADD";
const SET_PROFILE = "SET-PROFILE";
const USER_STATUS = "USER-STATUS";

let initialState = {
  posts: [
    { id: 1, post: "hi" },
    { id: 2, post: "my" },
    { id: 3, post: "first" },
    { id: 4, post: "post" },
    { id: 5, post: "today!" },
  ],
  profile: null,
  userStatus: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.postText],
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case USER_STATUS:
      return { ...state, userStatus: action.userStatus };
    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (userStatus) => ({ type: USER_STATUS, userStatus });

export const userProfile = (id) => {
  return async (dispatch) => {
    let data = await profileAPI.getProfile(id);
    dispatch(setProfile(data));
  };
};

export const getUserStatus = (id) => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(id);
    dispatch(setStatus(data));
  };
};

export const updUserStatus = (userStatus) => {
  return async (dispatch) => {
    let data = await profileAPI.updStatus(userStatus);
    if (data.resultCode === 0) {
      dispatch(setStatus(userStatus));
    }
  };
};
export default postReducer;
