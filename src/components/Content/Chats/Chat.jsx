import React from "react";
import { getAC } from "./../../../redux/state";

const Chat = (props) => {
  let arr = props.dispatch(getAC()).msgPage.msg;
  let chatElement = arr.map((el) => (
    <div className="msg" key={el.id}>
      {el.msg}
    </div>
  ));
  return <>{chatElement}</>;
};

export default Chat;
