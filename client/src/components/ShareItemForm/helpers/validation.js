export default function validate(values) {
  const errors = {};

  if (!values.imageurl) {
    errors.imageurl = 'Required';
  }
  if (!values.title) {
    errors.title = 'Required';
  }
  if (values.description) {
    errors.description = 'Required';
  }
  if (!values.tags) {
    errors.tags = 'One tag required';
  }
  /**
   * @TODO: Write the validation rules for the share form.
   *
   * An item title, description, and at least one tag is required for all items.
   */

  return errors;
}
