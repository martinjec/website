import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = React.memo((props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.userStatus);

  useEffect(() => {
    setStatus(props.userStatus);
  }, [props.userStatus]);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div>
        {!editMode ? (
          <div>
            <span onClick={activateEditMode}>
              {props.userStatus ? props.userStatus : "There is no status yet! "}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status ? status : ""}
            />
          </div>
        )}
      </div>
    </>
  );
});

export default ProfileStatus;
