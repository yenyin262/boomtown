import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { Field } from 'react-final-form';
// import { TextField } from 'final-form-material-ui';
// import { Form } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// const newShareItems = props => {
//   {
//     props.options.map(option => {
//       return (
//         <option key={option} value={option} label={option}>
//           {option}
//         </option>
//       );
//     });
//   }
// };

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        name: '',
        item: '',
        tags: []
        // multiline: 'Controlled'
      },
      newItemTags: [
        'Sporting Goods',
        'Household Items',
        'Musical Instruments',
        'Tools',
        'Headphones'
      ]
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleTag = event => {
    this.setState({ name: event.target.value });
  };

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newItem: {
          ...prevState.newItem,
          [name]: value
        }
      }),
      () => console.log(this.state.newItem)
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Share. Borrow. </h1>
        <h1> Prosper </h1>
        <div>
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
          />
          <label htmlFor="outlined-button-file">
            <Button
              variant="outlined"
              component="span"
              className={classes.selectImgBtn}
            >
              SELECT AN IMAGE
            </Button>
          </label>
        </div>

        <FormControl>
          <TextField
            // className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            label="Name Your Item"
          />
          <TextField
            // label="Label"
            style={{ margin: 3 }}
            placeholder="Describe Your Item"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            multiline
            rows="4"
            value={this.state.item}
            onChange={this.handleChange('item')}
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
          <TextField
            id="standard-name"
            // className={classes.textField}
            // value={this.state.name}
            name={'tags'}
            // options={item.tags[0].title}
            // value={item.tags[0].title}
            options={this.setState.newItemTags}
            value={this.setState.newItemTags}
            onChange={this.handleInput}
            placeholder={''}
            margin="normal"
            label="Add some tags"
            select
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(ShareForm);
{
  /* {items.map(item => {
        let tags = item.tags.map(tag => tag.title);}} */
}

{
  /* {option.label} */
}
{
  /* 
            // {dataItems.tags.map(option => (
            //   <option key={option.value} value={option.value}>

            //   </option>
            // ))} */
}
