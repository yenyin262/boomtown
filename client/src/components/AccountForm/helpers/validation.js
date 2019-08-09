export function validateSignUp(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.fullname) {
    errors.fullname = 'Required';
  }
  return errors;
}

export function validateLogin(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
}
