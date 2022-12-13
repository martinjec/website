import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  onSubmit = (formData) => {
    let errors = this.props.login(formData);
    return errors;
  };

  render() {
    return <LoginForm data={this.props} onSubmit={this.onSubmit} />;
  }
}
export default Login;
