import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  header: { "API-KEY": "d551a7c8-7ee3-4b56-9ba7-181d6812e19d" },
});

export const usersAPI = {
  // Get all users
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};
export const followAPI = {
  //Follow user
  unfollowUser(userId) {
    return instance.delete(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  //Unfollow user
  followUser(userId) {
    return instance.post(`/follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  //Get user profile 
  getProfile(id = 1) {
    return instance.get(`/profile/${id}`).then((response) => {
      return response.data;
    });
  },
  // Get user status
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then((response) => {
      return response.data;
    });
  },
  // Update my status
  updStatus(userStatus) {
    return instance
      .put(`/profile/status`, { status: userStatus })
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  //Get my user data from server
  me() {
    return instance.get("/auth/me").then((response) => {
      return response.data;
    });
  },
  //Login
  login(userData) {
    return instance.post("/auth/login", userData).then((response) => {
      return response.data;
    });
  },
  //Logout
  delete() {
    return instance.delete("/auth/login").then((response) => {
      return response.data;
    });
  },
};
