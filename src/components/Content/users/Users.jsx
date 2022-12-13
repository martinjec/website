import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../../assets/images/avatar.png";
import "./style.module.css";

const Users = (props) => {
  let pages = props.Paginator(
    props.totalUsersCount,
    props.onPageChange,
    props.currentPage
  );
  return (
    <div>
      <div>{pages}</div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div> {user.name}</div>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img 
                className="avatar"
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt=""
              />
            </NavLink>
          </div>
          <div>{user.status}</div>
          <div>
            {user.followed ? (
              <button
                disabled={props.followingBtnStatus.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollowUserTC(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingBtnStatus.some((id) => id === user.id)}
                onClick={() => {
                  props.followUserTC(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
