import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import msgReducer from "./msgReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    messagesPage: msgReducer,
    profilePage: postReducer,
    userPage: userReducer,
    auth: authReducer,
    app: appReducer,
  },
});
window.store = store;

export default store;
