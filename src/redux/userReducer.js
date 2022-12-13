import { usersAPI } from "../api/api.js";
import { followAPI } from "../api/api.js";
import { updObjInArr } from "../components/common/helpers/objHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updObjInArr(state.users, action.id, ["id"], { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updObjInArr(state.users, action.id, ["id"], { followed: false }),
      };

    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((id) => id !== action.id),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsers };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
////action creators
export let follow = (id) => ({ type: FOLLOW, id });
export let unfollow = (id) => ({ type: UNFOLLOW, id });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export let setTotalUsersCount = (totalUsers) => ({
  type: TOTAL_USERS_COUNT,
  totalUsers,
});
export let toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export let followingProgress = (isFetching, id) => ({
  type: FOLLOWING_PROGRESS,
  isFetching,
  id,
});

////////thunk creators
export const getUsersThunkCreator = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    console.log(data);
  };
};

const followUnfollow = async (dispatch, id, APImethod, actionCreator) => {
  let data = await APImethod;
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(followingProgress(false, id));
};
export const followUserTC = (id) => {
  return async (dispatch) => {
    followUnfollow(dispatch, id, followAPI.followUser(id), follow);
  };
};

export const unfollowUserTC = (id) => {
  return async (dispatch) => {
    followUnfollow(dispatch, id, followAPI.unfollowUser(id), unfollow);
  };
};
export default userReducer;
