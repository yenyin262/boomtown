import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import bmtwnLogo from '../../images/boomtown.svg';
import styles from './styles';
import CardItem from '../../components/CardItem/CardItem';

// import NavBar from '../../components/NavigationBar/NavBar';

const Items = ({ classes, dataItems }) => {
  return (
    <div>
      <p>
        <AppBar position="static">
          <Toolbar>
            <Link to="/items">
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
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <Icon className={classes.icon}>add_circle</Icon> Share Something
              </Button>
            </Link>
            <Link to="/profile">
              <Button
                variant="extended"
                color="primary"
                aria-label="Add"
                className={classes.margin}
              >
                <MoreVertIcon />
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </p>
      <CardItem items={dataItems} />
    </div>
  );
};

export default withStyles(styles)(Items);
