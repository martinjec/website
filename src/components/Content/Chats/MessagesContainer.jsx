import React from "react";
import Messages from "./Messages";
import { updMsg, sendMsg } from "./../../../redux/msgReducer";
import { connect } from "react-redux";
import { authRedirect } from "../../../hoc/authRedirect";
import { compose } from "redux";

const MessagesContainer = (props) => {
  return (
    <Messages
      updMsg={props.updMsg}
      sendMsg={props.sendMsg}
      messagesPage={props.messagesPage}
    />
  );
};

let mapStateToProps = (state) => ({ messagesPage: state.messagesPage });

export default compose(
  connect(mapStateToProps, { updMsg, sendMsg }),
  authRedirect
)(MessagesContainer);
