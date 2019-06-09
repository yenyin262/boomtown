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
  if (!this.state.selectedTags.length) {
    errors.tags = 'One tag required';
  }
  console.log(errors);

  return errors;
}
