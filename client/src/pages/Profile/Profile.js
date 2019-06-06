import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar';
import CardGrid from '../../components/CardGrid';

const Profile = ({ classes, itemsofUser, user }) => {
  console.log('print users item', itemsofUser);
  console.log(user, 'no');
  // console.log(viewer, 'view me ');
  return (
    <div>
      <NavigationBar pageType={true} />
      <div className={classes.profileContainer}>
        <UserProfile
          // key={viewer.index}
          itemsofUser={itemsofUser}
          // viewer={viewer}
          user={user}
        />

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

export default withStyles(styles)(Profile);
