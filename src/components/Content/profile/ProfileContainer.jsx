import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePost from "./ProfilePost";
import {
  addPost,
  userProfile,
  getUserStatus,
  updUserStatus,
} from "../../../redux/postReducer";
import { connect } from "react-redux";
import { withRouter } from "./../../../hoc/withRouter";
import { authRedirect } from "../../../hoc/authRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.router.params.userId;
    this.props.userProfile(id);
    this.props.getUserStatus(id);
  }
  render() {
    return (
      <div>
        <ProfileInfo
          {...this.props}
          profile={this.props.profile}
          userStatus={this.props.userStatus}
          updUserStatus={this.props.updUserStatus}
        />
        <ProfilePost
          profilePage={this.props.profilePage}
          addPost={this.props.addPost}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    userStatus: state.profilePage.userStatus,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    userProfile,
    getUserStatus,
    updUserStatus,
  }),
  withRouter,
  authRedirect
)(ProfileContainer);
