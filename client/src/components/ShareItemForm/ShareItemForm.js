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
import {
  updateNewItem,
  resetItem,
  resetNewItemImage
} from '../../redux/ShareItemPreview/reducer';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
import validate from './helpers/validation';

import { Mutation } from 'react-apollo';
import { ADD_ITEM_MUTATION } from '../../apollo/queries';

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
      title: ''
    };
  }

  componentDidMount() {
    let randomItem = {
      title: 'Name Your Item',
      description: 'Describe Your Item'
    };
    this.props.updateNewItem(randomItem);
  }

  handleSelectedFile() {
    const theFile = this.fileInput.current.files[0];
    this.setState({ fileSelected: theFile });
    const { updateNewItem } = this.props;

    if (theFile) {
      this.getBase64Url(theFile).then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }
  }

  dispatchUpdate(values) {
    const { updateNewItem } = this.props;
    updateNewItem({
      ...values
    });
  }
  getBase64Url(fileSelected) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(`data:${fileSelected.type};base64, ${btoa(e.target.result)}`);
      };
      reader.readAsBinaryString(fileSelected);
    });
  }

  // applyTags(tags) {
  //   return (
  //     tags &&
  //     tags
  //       .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
  //       .map(t => ({ title: t.title, id: t.id }))
  //   );
  // }

  handleChangeTag(event) {
    this.setState({ selectedTags: event.target.value });
    const { updateNewItem } = this.props;
    if (event.target.value)
      updateNewItem({
        tags: event.target.value
      });
  }

  resetFileInput() {
    this.fileInput.current.value = '';
    this.props.resetNewItemImage();
    this.setState({ fileSelected: false });
  }

  insertTags(selected) {
    const joinedTags = selected.join(', ');
    return joinedTags;
  }

  resetTags() {
    this.setState({ selectedTags: [] });
  }

  render() {
    const { classes, tags } = this.props;
    console.log(this.props, 'propsitems');
    console.log(this.state, 'this.state');
    console.log(this.props.title, 'props title');
    console.log(this.props.tags, 'tags props');

    return (
      // <div className={classes.formContainer}>
      <ViewerContext.Consumer>
        {({ loading, viewer }) => {
          return (
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {addItem => (
                <div className={classes.formContainer}>
                  <Form
                    validate={validate.bind(this)}
                    onSubmit={(values, form) => {
                      console.log('values', values);
                      const item = {
                        title: values.title,
                        description: values.description,
                        tags: values.tags.map(newtag => {
                          const foundTag = tags.find(tag => {
                            return tag.title === newtag;
                          });
                          return {
                            id: foundTag.id,
                            title: newtag
                          };
                        })
                      };
                      console.log('item', item);
                      addItem({
                        variables: {
                          item: item
                        }
                      })
                        .then(() => {
                          alert('New Item Added');
                          form.reset();
                        })
                        .catch(() => alert('Item not added sucessfully'));
                    }}
                    render={({ handleSubmit, pristine, invalid, form }) => (
                      <form onSubmit={handleSubmit}>
                        <FormSpy
                          subscription={{ values: true }}
                          component={({ values }) => {
                            if (Object.keys(values).length > 0) {
                              this.dispatchUpdate(
                                values,
                                // this.state.selectedTags,
                                viewer
                              );
                            }
                            return '';
                          }}
                        />

                        <div className={classes.bmtwnHeader}>
                          <h1 className={classes.headerOne}>
                            Share. Borrow. Prosper.
                          </h1>
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
                                {this.state.fileSelected ? (
                                  <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.selectImgBtnReset}
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
                                  inputProps={{ ...input }}
                                />
                              )}
                            </Field>
                          </FormControl>
                          <FormControl className={classes.SelectTags}>
                            <InputLabel>Add some tags</InputLabel>
                            <Field
                              name="tags"
                              render={({ input, meta }) => {
                                return (
                                  <Select
                                    multiple
                                    placeholder="Add some tags"
                                    value={input.value || []}
                                    onChange={input.onChange}
                                    renderValue={selected => {
                                      return this.insertTags(selected);
                                    }}
                                    MenuProps={MenuProps}
                                  >
                                    {addTags.map(selectedTags => (
                                      <MenuItem
                                        key={selectedTags}
                                        value={selectedTags}
                                      >
                                        <Checkbox
                                          checked={
                                            input.value.indexOf(selectedTags) >
                                            -1
                                          }
                                        />

                                        <ListItemText primary={selectedTags} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                );
                              }}
                            />
                          </FormControl>

                          <FormControl>
                            <Field
                              render={({ input, meta }) => (
                                <Button
                                  variant="outlined"
                                  className={classes.button}
                                  disabled={invalid}
                                  type="submit"
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
                </div>
              )}
            </Mutation>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

// similar getState
// const mapStatetoProps = null;

function mapStatetoProps(state, ownProps) {
  return {
    title: state.shareItemPreview.title,
    description: state.shareItemPreview.description,
    tags: ownProps.tags
  };
}
// similar to Dispatch
const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    dispatch(updateNewItem(item));
  },
  resetItem() {
    dispatch(resetItem());
  },
  resetNewItemImage() {
    dispatch(resetNewItemImage());
  }
});

ShareItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  tags: PropTypes.array,
  handleSubmit: PropTypes.func
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));
