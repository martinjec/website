import { Form, Field } from "react-final-form";
import { composeValidators, required } from "../common/helpers/Validator";
import { Input } from "../common/helpers/FormContol";

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <Field
              component={Input}
              name="email"
              type="email"
              validate={composeValidators(required)}
              children="input"
              placeholder="email"
            />
          </div>
          <div>
            <Field
              component={Input}
              name="password"
              type="password"
              validate={required}
              children="input"
              placeholder="Password"
            />
          </div>
          <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
            Remember me
          </div>
          <div>{props.error}</div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    />
  );
};

export default LoginForm;
