import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CardGrid from '../../components/CardGrid';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.ItemContainer}>
      <NavigationBar />
      <CardGrid items={items} />
      {/* <div>{showAllItems}</div> */}
    </div>
  );
};

export default withStyles(styles)(Items);
