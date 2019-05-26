import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Form, Field, FormSpy } from 'react-final-form';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { updateNewItem } from '../../redux/ShareItemPreview/reducer';
import { connect } from 'react-redux';

const addTags = [
  'Sporting Goods',
  'Household Items',
  'Musical Instruments',
  'Tools',
  'Headphones'
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.state = {
      fileSelected: null,
      selectedTags: [],
      name: [],
      newItem: {
        name: '',
        item: '',

        // multiline: 'Controlled'
        submitting: false
        // onCancel: () => {}
      }
    };
    // this.handleInput = this.handleInput.bind(this);
    // selectedTags: [],
    // selectedFile: null
  }

  componentDidMount() {
    let randomItem = {
      title: 'banana',
      description: 'babe'
    };
    this.props.updateNewItem(randomItem);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeTag = event => {
    this.setState({ name: event.target.value });
  };

  handleSelectedFile() {
    const theFile = this.fileInput.current.files[0];
    this.setState({ fileSelected: theFile });
  }

  // handleSelectedTag() {
  //   this.setState({ selectedTags: event.target.value });
  // }

  //  if image has been selected
  dispatchUpdate(values, tags) {
    const { updateNewItem } = this.props;
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }
    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
  //
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      // a way to get notified when file ereader is done reading a file
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }
  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }

  render() {
    const { classes } = this.props;
    const { submitting } = this.props;
    const { tags, updateNewItem } = this.props;
    const noop = () => {};
    return (
      <Form
        onSubmit={noop}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              subscription={{ values: true }}
              component={({ values }) => {
                console.log(values);
                if (Object.keys(values).length > 0) {
                  console.log(1234);
                  this.dispatchUpdate(values, tags);
                }
                return '';
              }}
            />
            <div className={classes.bmtwnHeader}>
              <h1>Share. Borrow. Prosper </h1>
            </div>
            <Field
              name="imageurl"
              render={({ input, meta }) => {
                return (
                  <div>
                    <input
                      ref={this.fileInput}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={e => this.handleSelectedFile(e)}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.selectImgBtn}
                      onClick={() => {
                        this.fileInput.current.click();
                      }}
                    >
                      SELECT AN IMAGE
                    </Button>
                  </div>
                );
              }}
            />
            <Field
              render={({ input, meta }) => (
                <TextField
                  value={this.state.newItem.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  label="Name Your Item"
                  fullWidth
                />
              )}
            />
            <Field name="description">
              {({ input, meta }) => (
                <TextField
                  style={{ margin: 3 }}
                  placeholder="Describe Your Item"
                  fullWidth
                  // margin="normal"
                  multiline
                  value={this.state.item}
                  inputProps={{ ...input }}
                />
              )}
            </Field>
            <FormControl>
              <InputLabel htmlFor="select-multiple-chip">
                Add some tags
              </InputLabel>
              <Field
                render={({ input, meta }) => (
                  <Select
                    multiple
                    placeholder="Add some tags"
                    id="standard-name"
                    // margin="normal"
                    fullWidth
                    value={this.state.name}
                    onChange={this.handleChangeTag}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                    input={<Input id="select-multiple-checkbox" />}
                  >
                    {addTags.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={this.state.name.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <Field
              render={({ input, meta }) => (
                <Button
                  variant="outlined"
                  className={classes.button}
                  disabled={submitting}
                >
                  <Typography
                    component="h3"
                    className={classes.descriptionName}
                  >
                    SHARE
                  </Typography>
                </Button>
              )}
            />
          </form>
        )}
      />
    );
  }
}
// similar getState
const mapStatetoProps = null;

// similar to Dispatch
const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    dispatch(updateNewItem(item));
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));
