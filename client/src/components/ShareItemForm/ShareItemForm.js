import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { Field } from 'react-final-form';
// import { TextField } from 'final-form-material-ui';
// import { Form } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

// const skillOptions = [
//   {
//     value: 'Tools',
//     label: 'Tools'
//   },
//   {
//     value: 'householditems',
//     label: 'householditems'
//   },
//   {
//     value: 'electronics',
//     label: 'electronics'
//   }
// ];

// const Select = props => {
//   return (
//     // <div className="form-group">
//     //   <label for={props.name}> {props.title} </label>
//       // <select
//         id={props.name}
//         name={props.name}
//         value={props.value}
//         onChange={props.handleChange}
//         className="form-control"
//       >
//         <option value="" disabled>
//           {props.placeholder}
//         </option>
//         {props.options.map(option => {
//           return (
//             <option key={option} value={option} label={option}>
//               {option}
//             </option>
//           );
//         })}
//       {/* </select>
//     </div> */}
//   );
// };

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        name: '',
        item: '',
        tags: 'Add Some Tags'
        // skills: '',
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

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    // const { dataItems } = this.props;
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
            label="Name Your Item"
          />
          <TextField
            // id="standard-full-width"
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
            options={this.state.newItemTags}
            value={this.state.newItem.tags}
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
