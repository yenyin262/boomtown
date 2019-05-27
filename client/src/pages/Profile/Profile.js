import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar';

const Profile = ({ classes }) => {
  return (
    <div>
      <NavigationBar />
      <div className={classes.profileContainer}>
        {/* <p>
        This is the profile page located at <code>/profile/:userId</code>.
      </p> */}

        <UserProfile />
      </div>
    </div>
  );
};

// export default Profile;
export default withStyles(styles)(Profile);
