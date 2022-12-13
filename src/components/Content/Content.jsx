import React from "react";
import Post from "./Post/Post";
import style from "./Content.module.css";

const Messages = () => {
  return (
    <div className={style.content}>
      <div>content</div>
      <Post msg="hello" />
    </div>
  );
};

export default Messages;
