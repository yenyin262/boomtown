import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from '../CardItem';
import styles from './styles';

const CardGrid = ({ classes, items, viewer }) => {
  let getItems;

  let a = items;

  if (a != null) {
    getItems = items.map(item => (
      <CardItem item={item} key={item.id} viewer={viewer} />
    ));
  } else {
    getItems = '';
  }

  return (
    <Grid container alignContent="center" spacing={16}>
      <Grid item xs={12}>
        <Grid container className={classes.containerGrid} viewer={viewer}>
          {getItems}
        </Grid>
      </Grid>
    </Grid>
  );
};

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardGrid);
