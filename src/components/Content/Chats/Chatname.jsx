import React from "react";
import { NavLink } from "react-router-dom";
import { getAC } from "./../../../redux/state";

const ChatName = (props) => {
  let arr = props.dispatch(getAC()).msgPage.chats;
  let chatElement = arr.map((el) => (
    <div className="chatName" key={el.id}>
      <NavLink key={el.id} to={`./${el.id}`}>
        {el.name}
      </NavLink>
    </div>
  ));
  return <>{chatElement}</>;
};

export default ChatName;
