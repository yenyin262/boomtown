import React, { Component } from 'react';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

{
  /* <Icon class="material-icons" id="fingerprintIcon">
fingerprint
</Icon>
<Icon class="material-icons" id="signOutIcon">
power_settings_new
</Icon> */
}

// class MenuAppBar extends React.Component {
//return ()
//}

// this is the menu button
const options = ['Your Profile', 'Sign Out'];

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
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Your Profile'}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MenuOptions;
