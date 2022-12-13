import React from "react";

class Messages extends React.Component {
  updList = () => {
    return this.props.messagesPage.messages.map((postElement) => (
      <div key={postElement.id}>{postElement.msg}</div>
    ));
  };
  postElement = React.createRef();
  send = () => {
    this.props.sendMsg();
  };

  onPostChange = () => {
    let text = this.postElement.current.value;
    this.props.updMsg(text);
  };
  updText = () => {
    return this.props.messagesPage.updText.msg;
  };

  render() {
    return (
      <div>
        <div>
          <textarea
            onChange={this.onPostChange}
            ref={this.postElement}
            value={this.updText()}
          />
        </div>
        <div>
          <button onClick={this.send}>Send</button>
        </div>
        <div>{this.updList()}</div>
      </div>
    );
  }
}

export default Messages;
