import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

// this is the menu button
const profilePage = ['Your Profile'];
const signOutPage = ['Sign Out'];

const ITEM_HEIGHT = 48;

class MenuOptions extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'nav-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 170
            }
          }}
        >
          <Link to="/profile" className={classes.profileIcon}>
            {profilePage.map(option => (
              <MenuItem key={option} onClick={this.handleClose}>
                <Icon className={classes.menuIcon}>fingerprint </Icon> {option}
              </MenuItem>
            ))}
          </Link>
          <Link to="/welcome">
            {signOutPage.map(option => (
              <MenuItem key={option} onClick={this.handleClose}>
                <Icon className={classes.menuIcon}>power_settings_new </Icon>{' '}
                {option}
              </MenuItem>
            ))}
          </Link>
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(MenuOptions);
