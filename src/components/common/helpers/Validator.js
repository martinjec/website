// Check is input field is not empty
export const required = (value) => (value ? undefined : "Required");

// Check that input is not too long
export const maxValue = (max) => (value) =>
  value.length <= max ? undefined : `Should no be more than ${max}`;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
