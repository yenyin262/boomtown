import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { Field } from 'react-final-form';
// import { TextField } from 'final-form-material-ui';
// import { Form } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class ShareForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: 'Name Your Item',
    item: '',
    tags: 'Add Some Tags',
    multiline: 'Controlled'
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Share. Borrow. Prosper </h1>

        <FormControl>
          <TextField
            id="standard-name"
            // className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-item"
            // className={classes.textField}
            label="Describe your item"
            value={this.state.item}
            onChange={this.handleChange('item')}
            margin="normal"
          />
          <TextField
            id="standard-item"
            // className={classes.textField}
            value={this.state.tags}
            onChange={this.handleChange('tags')}
            margin="normal"
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(ShareForm);
