import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Profile = ({ classes }) => {
  return (
    <div className={classes.profileContainer}>
      {/* <p>
        This is the profile page located at <code>/profile/:userId</code>.
      </p> */}
      <UserProfile />
    </div>
  );
};

// export default Profile;
export default withStyles(styles)(Profile);
