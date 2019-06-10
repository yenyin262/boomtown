export default function validate(values) {
  const errors = {};

  if (!this.state.fileSelected) {
    errors.imageurl = 'Required';
  }
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }

  if (!values.tags || !values.tags.length) {
    errors.tags = 'One tag required';
  }

  return errors;
}
