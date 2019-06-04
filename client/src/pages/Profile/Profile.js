import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar';
import CardGrid from '../../components/CardGrid';

const Profile = ({ classes, itemsofUser, viewer }) => {
  console.log('print users id', itemsofUser);
  console.log(viewer, 'view me ');
  return (
    <div>
      <NavigationBar pageType={true} />
      <div className={classes.profileContainer}>
        <UserProfile
          key={viewer.index}
          itemsofUser={itemsofUser}
          viewer={viewer}
        />
        <CardGrid itemsofUser={itemsofUser} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
