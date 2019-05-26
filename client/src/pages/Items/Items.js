import React from 'react';
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
import CardItem from '../../components/CardItem/CardItem';
import MenuOptions from '../../components/MenuOptions/MenuOptions';
import ItemsContainer from './ItemsContainer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Items = ({ classes, dataItems }) => {
  const showAllItems = dataItems.map((value, index) => {
    return <CardItem item={value} key={index} />;
  });

  return (
    <div className={classes.ItemContainer}>
      <NavigationBar />

      <div>{showAllItems}</div>
    </div>
  );
};

export default withStyles(styles)(Items);
