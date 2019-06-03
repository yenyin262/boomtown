import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function UserProfile({ classes, viewer, itemsofUser }) {
  console.log('show user props', itemsofUser);
  console.log(itemsofUser, 'this is items ofuser');
  console.log(viewer, 'viewer this is me');
  let userBio;
  if (viewer.bio === null) {
    userBio = '"no bio provided."';
  } else {
    userBio = viewer.bio;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.userProfileContainer}>
          <div className={classes.picAndUser}>
            <Gravatar className={classes.avatarPic} email={viewer.email} />
            <Typography className={classes.title} component="h1" gutterBottom>
              {itemsofUser.fullname}
            </Typography>
          </div>
          <div>
            <Typography component="h2" className={classes.userInfo}>
              <span className={classes.itemNo}>
                {' '}
                {itemsofUser.items.length}
              </span>{' '}
              Item shared{' '}
              <span className={classes.itemNo}>
                {itemsofUser.borrowed.length}{' '}
              </span>{' '}
              Item borrowed
              {/* {user.items.length <= 1 ? '1 Item Shared' : {user.items.length `Items Shared`}} */}
            </Typography>
            <Typography component="p" className={classes.biography}>
              {userBio}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  viewer: PropTypes.object,
  itemsofUser: PropTypes.object
};
export default withStyles(styles)(UserProfile);
