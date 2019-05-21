import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
      <p>“For it is in giving that we receive.” </p>
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);
