import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CardGrid from '../../components/CardGrid';

const Items = ({ classes, items, viewer }) => {
  return (
    <div className={classes.ItemContainer}>
      <NavigationBar pageType={true} />
      <div className={classes.cardGridItemsubContainer}>
        <CardGrid items={items} viewer={viewer} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Items);
