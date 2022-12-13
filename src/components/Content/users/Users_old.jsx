import axios from "axios";
import React from "react";
import userPhoto from "./../../../assets/images/avatar.png";
let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(
            response.data.items
            //     id: 1,
            //     followed: false,
            //     name: "Janis",
            //     status: "hey",
            //     location: { country: "Latvia", city: "Riga" },
          );
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map((user) => (
        <div key={user.id}>
          <div> {user.name}</div>
          <div>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
            />
          </div>
          <div>{user.status}</div>
          <div>
            {user.followed ? (
              <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(user.id)}>Follow</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
