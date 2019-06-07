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
      title: '',
      item: ''

      // imageurl: ''
    };
  }

  componentDidMount() {
    let randomItem = {
      title: 'Name Your Item',
      tags: '',
      description: 'Describe Your Item',
      imageurl: '',
      user: {}

      // itemowner: itemowner
    };
    this.props.updateNewItem(randomItem);
  }

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

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
    // console.log('item owner', itemowner);
    console.log(values, 'this is values');
    // console.log(tags, 'this is taggy ');
    // console.log('dispatch tags', tags);
    // console.log('this is values', values);
    const { updateNewItem } = this.props;

    // if (this.state.fileSelected) {
    //   this.getBase64Url().then(imageurl => {
    //     updateNewItem({
    //       imageurl
    //     });
    //   });
    // }

    updateNewItem({
      ...values
      // tags: this.state.selectedTags,
      // tags: this.applyTags(tags),
      // itemowner: itemowner
    });
  }
  // inisde card item = if itemowner is null use current viewer
  getBase64Url(fileSelected) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(`data:${fileSelected.type};base64, ${btoa(e.target.result)}`);
      };
      reader.readAsBinaryString(fileSelected);
    });
  }

  // handlechangeTitle = event => {
  //   this.setState({
  //     newItem: { ...this.state.newItem, title: event.target.value }
  //   });
  // };

  // applyTags(tags) {
  //   console.log('this is tags', tags);
  //   return (
  //     tags &&
  //     tags
  //       .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
  //       .map(t => ({ title: t.title, id: t.id }))
  //   );
  // }
  // handleSelectedTag() {
  //   this.setState({ selectedTags: event.target.value });
  // }

  // handleChangeTag = event => {
  //   this.setState({ selectedTags: event.target.value });
  //   console.log(event.target.value);
  // };
  handleChangeTag(event) {
    this.setState({ selectedTags: event.target.value });
    const { updateNewItem } = this.props;
    console.log(event, 'event tags');
    if (event.target.value)
      updateNewItem({
        tags: event.target.value
      });
  }

  // handleChangeTag(e) {
  //   const selectTags = this.state.selectedTags;
  //   this.setState({ selectedTags: selectTags });

  //   // console.log(event.target.value);
  //   const { updateNewItem, tags } = this.props;
  //   if (this.state.selectedTags)
  //     updateNewItem({
  //       // tags
  //       tags: this.applyTags(tags)
  //     });
  // }
  resetFileInput() {
    this.fileInput.current.value = '';
    this.props.resetNewItemImage();
    // this.setState({ fileSelected: false });
  }
  // insertTags(selected) {
  //   return selected.map(t =>
  //     (selected.indexOf(t.id) > -1 ? t.title : false).filter(e => e).join(',')
  //   );
  // }

  insertTags(selected) {
    console.log(selected, 'insert Tagssssssss');
    const joinedTags = selected.join(', ');
    return joinedTags;
  }

  // insertTags(tags) {
  //   return tags.map(t =>
  //     (this.state.selectedTags.indexOf(t.id) > -1 ? t.title : false)
  //       .filter(e => e)
  //       .join(',')
  //   );
  // }

  render() {
    const { submitting, classes, updateNewItem } = this.props;

    console.log('this is props', this.props);
    // console.log('tags form', tags);
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <div className={classes.formContainer}>
              <Form
                onSubmit={() => console.log('Share form was submitted')}
                render={({ handleSubmit, pristine, invalid, form }) => (
                  <form onSubmit={handleSubmit}>
                    <FormSpy
                      subscription={{ values: true }}
                      component={({ values }) => {
                        if (Object.keys(values).length > 0) {
                          this.dispatchUpdate(
                            values,
                            this.state.selectedTags,
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
                              onChange={this.handleChangeTag.bind(this)}
                              renderValue={selected => {
                                console.log(selected, 'fieellddd');
                                return this.insertTags(selected);
                              }}
                              // renderValue={selected => selected.join(', ')}
                              MenuProps={MenuProps}
                            >
                              {addTags.map(selectedTags => (
                                <MenuItem
                                  key={selectedTags}
                                  value={selectedTags}
                                >
                                  <Checkbox
                                    checked={
                                      this.state.selectedTags.indexOf(
                                        selectedTags
                                      ) > -1
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
                              // disabled={submitting}
                              disabled={submitting || pristine || invalid}
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
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}
// similar getState
const mapStatetoProps = null;

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
