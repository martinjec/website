import React from "react";
import "./Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/images/avatar.png";
import ProfileStatus from "./ProfileStatus";

class ProfileInfo extends React.Component {
  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <>
        <div>
          <img
            src={
              this.props.profile.photos.large != null
                ? this.props.profile.photos.large
                : userPhoto
            }
            alt=""
          />
        </div>
        <div>
          <ProfileStatus
            userStatus={this.props.userStatus}
            updUserStatus={this.props.updUserStatus}
          />
        </div>
        <div key={this.props.profile.userId}>
          Name: {this.props.profile.fullName}
        </div>
        <div>About me : {this.props.profile.aboutMe}</div>
        <div>
          Contacts:
          <div>
            {Object.values(this.props.profile.contacts).map((value, key) => (
              <div key={key}>{value}</div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ProfileInfo;
