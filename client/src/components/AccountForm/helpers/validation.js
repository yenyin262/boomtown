export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.fullname && document.getElementById('fullname') != null) {
    errors.fullname = 'Required';
  }
  return errors;
}
