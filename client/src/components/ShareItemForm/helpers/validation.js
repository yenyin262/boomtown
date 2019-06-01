export default function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.imageurl = 'Required';
  }
  if (!values.password) {
    errors.title = 'Required';
  }
  if (values.fullname && !values.fullname) {
    errors.description = 'Required';
  }

  return errors;
}
