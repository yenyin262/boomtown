import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from '../CardItem';
import styles from './styles';

const CardGrid = ({ items }) => {
  let getItems;

  let a = items;
  // let b = items.map(item);
  // let c = item;

  if (a != null) {
    getItems = items.map(item => <CardItem item={item} key={item.id} />);
  } else {
    getItems = '';
  }

  console.log('This is the first one', items);

  return (
    <Grid container alignContent="center" spacing={16}>
      <Grid item xs={12}>
        <Grid container>
          {/* {items.map(item => <CardItem item={item} key={item.id} />)} */}
          {getItems}
        </Grid>
      </Grid>
    </Grid>
  );
};

// class CardGrid extends Component {
//   // state = {
//   //   spacing: '16'
//   // };

//   render() {
//     const { items } = this.props;
//     let getItems;

//     let a = items;
//     // let b = items.map(item);
//     // let c = item;

//     if (a != null) {
//       getItems = items.map(item => <CardItem item={item} key={item.id} />);
//     } else {
//       getItems = '';
//     }

//     console.log('This is the first one', items);
//     return (
//       <Grid container alignContent="center" spacing={16}>
//         <Grid item xs={12}>
//           <Grid container>
//             {/* {items.map(item => <CardItem item={item} key={item.id} />)} */}
//             {getItems}
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardGrid);
