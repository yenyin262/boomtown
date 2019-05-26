import React, { Component } from 'react';
// import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import bmtwnLogo from '../../images/boomtown.svg';
import styles from './styles';
import CardItem from '../CardItem/CardItem';
import MenuOptions from '../MenuOptions/MenuOptions';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.navContainer}>
        <Toolbar>
          <Link to="/items" className={classes.itemLink}>
            <IconButton>
              <img
                margin-top="20px"
                margin-left="20px"
                width="40px"
                src={bmtwnLogo}
                alt="boomtown_logo"
              />
            </IconButton>
          </Link>
          <Link to="/share">
            <Button
              variant="extended"
              className={classes.shareBtn}
              // className={classes.margin}
            >
              <Icon className={classes.icon}>add_circle</Icon> Share Something
            </Button>
          </Link>

          <MenuOptions />
          {/* <IconButton>
      <MoreVertIcon />
    </IconButton> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
