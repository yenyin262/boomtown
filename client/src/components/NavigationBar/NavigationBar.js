import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import boomtownLogo from '../../images/boomtown.svg';
import styles from './styles';
import MenuOptions from '../MenuOptions/MenuOptions';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const NavigationBar = ({ classes, showShareIcon }) => {
  let shareLink;
  if (showShareIcon != null) {
    shareLink = (
      <Link to="/share">
        <Button className={classes.shareBtn}>
          <Icon className={classes.icon}>add_circle</Icon>
          <Typography>Share Something</Typography>
        </Button>
      </Link>
    );
  } else {
    shareLink = <div />;
  }

  return (
    <AppBar position="static" className={classes.navContainer}>
      <Toolbar>
        <Link to="/items">
          <IconButton>
            <img
              className={classes.bmtownImg}
              src={boomtownLogo}
              alt="boomtown_logo"
            />
          </IconButton>
        </Link>{' '}
        <div className={classes.childContainer}>
          {shareLink}
          <MenuOptions />
        </div>
      </Toolbar>
    </AppBar>
  );
};

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  showShareIcon: PropTypes.bool
};

export default withStyles(styles)(NavigationBar);
