import React from "react";
import { Form, Field } from "react-final-form";
import { TextArea } from "../../common/helpers/FormContol";
import {
  composeValidators,
  maxValue,
  required,
} from "../../common/helpers/Validator";

const Post = (props) => {
  let onSubmit = (data) => {
    props.addPost(data);
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                validate={composeValidators(required, maxValue(50))}
                name="post"
                component={TextArea}
                type="textarea"
              />
            </div>
            <button>Add post</button>
          </form>
        )}
      />
      <div>{props.post}</div>
    </>
  );
};

export default Post;
