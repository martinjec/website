import React from "react";
import Post from "./Post";

class ProfilePost extends React.Component {
  render() {
    let post = this.props.profilePage.posts.map((postEl) => (
      <div key={postEl.id}>{postEl.post}</div>
    ));
    return <Post post={post} addPost={this.props.addPost} />;
  }
}

export default ProfilePost;
