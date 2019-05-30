import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';
import NavigationBar from '../NavigationBar';

function FullScreenLoader(props) {
  const { classes } = props;
  return (
    <div>
      <NavigationBar />
      <div className={classes.containerLoader}>
        <div className={classes.loaderImgCaption}>
          <CircularProgress className={classes.progressCircle} />
          <p>“For it is in giving that we receive.” </p>
        </div>
      </div>
    </div>
  );
}

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenLoader);
