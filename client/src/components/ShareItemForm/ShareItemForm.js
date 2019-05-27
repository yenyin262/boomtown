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
      submitting: false,
      newItem: {
        title: '',
        item: ''
      }
    };
  }

  componentDidMount() {
    let randomItem = {
      title: 'banana',
      description: 'babe'
    };
    this.props.updateNewItem(randomItem);
  }

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  handleSelectedFile() {
    const theFile = this.fileInput.current.files[0];
    this.setState({ fileSelected: theFile });
  }

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
  // handlechangeTitle = event => {
  //   this.setState({
  //     newItem: { ...this.state.newItem, title: event.target.value }
  //   });
  // };

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }
  // handleSelectedTag() {
  //   this.setState({ selectedTags: event.target.value });
  // }

  handleChangeTag = event => {
    this.setState({ selectedTags: event.target.value });
  };

  resetFileInput() {
    this.fileInput.current.value = '';
    this.props.resetNewItemImage();
    this.setState({ fileSelected: false });
  }

  render() {
    const { submitting, classes, tags } = this.props;
    console.log(tags);

    return (
      <Form
        onSubmit={() => console.log('Share form was submitted')}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              subscription={{ values: true }}
              component={({ values }) => {
                if (Object.keys(values).length > 0) {
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

                    {/* <Button
                      variant="contained"
                      component="span"
                      className={classes.selectImgBtn}
                      onClick={() => {
                        this.resetFileInput();
                      }}
                    >
                      RESET IMAGE
                    </Button> */}
                  </div>
                );
              }}
            />

            <Field
              name="title"
              render={({ input, meta }) => (
                <TextField
                  inputProps={{ ...input }}
                  // onChange={event => this.handlechangeTitle(event)}
                  margin="normal"
                  placeholder="Name Your Item"
                  fullWidth
                  className={classes.TextField}
                />
              )}
            />

            <Field name="description">
              {({ input, meta }) => (
                <TextField
                  style={{ margin: 3 }}
                  placeholder="Describe Your Item"
                  fullWidth
                  multiline
                  className={classes.TextField}
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
                    fullWidth
                    value={this.state.selectedTags}
                    className={classes.TextField}
                    onChange={this.handleChangeTag}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                    input={<Input id="select-multiple-checkbox" />}
                  >
                    {addTags.map(selectedTags => (
                      <MenuItem key={selectedTags} value={selectedTags}>
                        <Checkbox
                          checked={
                            this.state.selectedTags.indexOf(selectedTags) > -1
                          }
                        />
                        <ListItemText primary={selectedTags} />
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

ShareItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  tags: PropTypes.func
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));
