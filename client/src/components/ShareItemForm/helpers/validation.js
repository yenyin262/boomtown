export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.imageurl = 'Required';
  }
  if (!values.description) {
    errors.title = 'Required';
  }
  if (values.tags && !values.tags) {
    errors.description = 'Required';
  }

  /**
   * @TODO: Write the validation rules for the share form.
   *
   * An item title, description, and at least one tag is required for all items.
   */

  return errors;
}
