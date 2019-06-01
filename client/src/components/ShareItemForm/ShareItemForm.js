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
      submitting: false,
      title: '',
      item: '',
      newItem: {
        title: '',
        item: ''
      }
    };
  }

  componentDidMount() {
    let randomItem = {
      title: 'Name Your Item',
      description: 'Describe Your Item',
      tags: ''
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
    console.log('boo', tags);
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
    console.log('st', tags);
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
    console.log(event.target.value);
  };

  resetFileInput() {
    this.fileInput.current.value = '';
    this.props.resetNewItemImage();
    this.setState({ fileSelected: false });
  }
  render() {
    const { submitting, classes } = this.props;

    console.log('dfdfd', this.props);
    return (
      <Form
        onSubmit={() => console.log('Share form was submitted')}
        render={({ handleSubmit, pristine, invalid, form }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              subscription={{ values: true }}
              component={({ values }) => {
                if (Object.keys(values).length > 0) {
                  this.dispatchUpdate(values, this.state.selectedTags);
                }
                return '';
              }}
            />

            <div className={classes.bmtwnHeader}>
              <h1>Share. Borrow. Prosper. </h1>
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
                    {submitting ? (
                      <Button
                        variant="contained"
                        component="span"
                        className={classes.selectImgBtn}
                        onClick={() => {
                          this.resetFileInput();
                        }}
                      >
                        RESET IMAGE
                      </Button>
                    ) : (
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
                    )}
                  </div>
                );
              }}
            />
            <div className={classes.Container}>
              <FormControl>
                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <TextField
                      inputProps={{ ...input }}
                      margin="normal"
                      placeholder="Name Your Item"
                      className={classes.NameTextField}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Field name="description">
                  {({ input, meta }) => (
                    <TextField
                      className={classes.DescribeItemTextField}
                      placeholder="Describe Your Item"
                      multiline
                      rows="4"
                      value={this.state.item}
                      inputProps={{ ...input }}
                    />
                  )}
                </Field>
              </FormControl>
              <FormControl className={classes.SelectTags}>
                <InputLabel>Add some tags</InputLabel>
                <Field
                  name="tags"
                  render={({ input, meta }) => (
                    <Select
                      multiple
                      placeholder="Add some tags"
                      value={this.state.selectedTags}
                      onChange={this.handleChangeTag}
                      renderValue={selected => selected.join(', ')}
                      MenuProps={MenuProps}
                      // input={<Input id="select-multiple-checkbox" />}
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

              <FormControl>
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
              </FormControl>
            </div>
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
