import React from "react";
import style from "./formsControls.module.css";

export const FormContol = ({ input, meta, ...props }) => {
  const hasError = meta.touched && (meta.error || meta.submitError);
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormContol {...props}>
      <textarea {...input} {...restProps} />
    </FormContol>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormContol {...props}>
      <input {...input} {...restProps} />
    </FormContol>
  );
};
