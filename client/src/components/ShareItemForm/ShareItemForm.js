import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
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
    this.state = {
      name: [],
      newItem: {
        name: '',
        item: '',
        tags: [],
        // multiline: 'Controlled'

        submitting: false,
        onCancel: () => {}
      }
    };
    // this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    let randomItem = {
      title: 'banana',
      description: 'babe'
    };
    this.props.updateBanana(randomItem);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeTag = event => {
    this.setState({ name: event.target.value });
  };

  // handleInput(e) {
  //   let value = e.target.value;
  //   let name = e.target.name;
  //   this.setState(
  //     prevState => ({
  //       newItem: {
  //         ...prevState.newItem,
  //         [name]: value
  //       }
  //     }),
  //     () => console.log(this.state.newItem)
  //   );
  // }
  // handleCancel = e => {
  //   e.preventDefault();
  //   this.props.onCancel();
  // };

  // share() {
  //   let completed = this.state.newItem.filter((item, index) => item.complete);
  //   return completed.length > 0;
  // }

  // onSubmit() {
  //   console.log('on submit');
  // }

  render() {
    const { classes } = this.props;
    const { submitting } = this.props;
    return (
      <FormControl>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.bmtwnHeader}>
                <h1>Share. Borrow. Prosper </h1>
              </div>

              <Field
                accept="image/*"
                className={classes.input}
                multiple
                type="file"
                render={({ input, meta }) => (
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.selectImgBtn}
                    value={submitting ? '' : 'RESET IMAGE'}
                    disabled={submitting}
                    // onClick={() => {
                    //   selectNewImg(Img);
                    // }}
                  >
                    SELECT AN IMAGE
                  </Button>
                )}
              />
              <Field
                render={({ input, meta }) => (
                  <TextField
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    label="Name Your Item"
                    fullWidth
                  />
                )}
              />
              <Field
                render={({ input, meta }) => (
                  <TextField
                    style={{ margin: 3 }}
                    placeholder="Describe Your Item"
                    fullWidth
                    margin="normal"
                    multiline
                    rows="4"
                    value={this.state.item}
                    onChange={this.handleChange('item')}
                  />
                )}
              />
              <div>
                <Field
                  render={({ input, meta }) => (
                    <Select
                      multiple
                      placeholder="Add some tags"
                      id="standard-name"
                      margin="normal"
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
              </div>
            </form>
          )}
        />

        {/*  BELOW IS CONIDITIONAL STATEMENT TO RESET IMAGE AFT IMAGE CLICKED */}

        {/* {submitting ? (
          <Button
            // className={classes.selectImgBtn}
            onClick={e => {
              // props.form.reset();
              this.handleCancel(e);
            }}
          >
            RESET IMAGE
          </Button>
        ) : (
          <Button
            variant="outlined"
            component="span"
            className={classes.selectImgBtn}
          >
            SELECT AN IMAGE
          </Button>
        )} */}

        <Field
          render={({ input, meta }) => (
            <Button
              variant="outlined"
              className={classes.button}
              disabled={submitting}
            >
              <Typography component="h3" className={classes.descriptionName}>
                SHARE
              </Typography>
            </Button>
          )}
        />
      </FormControl>
    );
  }
}
// similar getState
const mapStatetoProps = reduxState => {
  return reduxState;
};
// similar to Dispatch
const mapDispatchToProps = dispatch => ({
  updateBanana(item) {
    dispatch(updateNewItem(item));
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));

// export default withStyles(styles);
{
  /* {items.map(item => {
        let tags = item.tags.map(tag => tag.title);}} */
}

{
  /* {option.label} */
}
{
  /* 
     {/* {dataItems.tags.map(option => ( */
}
//   <option key={option.value} value={option.value}>

//   </option>
// ))} */
