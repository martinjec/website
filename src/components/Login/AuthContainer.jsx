import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { login, logOut } from "../../redux/authReducer";
import { withRouter } from "../../hoc/withRouter";
import Login from "./Login";
import { Navigate } from "react-router-dom";

const AuthContainer = (props) => {
  const id = props.auth.id;
  return props.auth.isAuth ? (
    <Navigate to={`/profile/${id}`} />
  ) : (
    <Login
      auth={props.auth}
      login={props.login}
      error={props.auth.loginError}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { login, logOut })
)(AuthContainer);
