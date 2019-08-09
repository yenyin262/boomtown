import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar';
import CardGrid from '../../components/CardGrid';
import PropTypes from 'prop-types';

const Profile = ({ classes, itemsofUser, user }) => {
  return (
    <div>
      <NavigationBar showShareIcon={true} />
      <div className={classes.profileContainer}>
        <UserProfile itemsofUser={itemsofUser} user={user} />
        <div>
          <h1 className={classes.sharedHeader}>Shared Items</h1>
        </div>
        <div className={classes.profileGrid}>
          <CardGrid items={itemsofUser} />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  itemsofUser: PropTypes.array,
  user: PropTypes.object
};

export default withStyles(styles)(Profile);
