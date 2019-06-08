import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function UserProfile({ classes, viewer, user, itemsofUser }) {
  let userBio;
  if (user.bio != null) {
    userBio = user.bio;
  } else {
    userBio = '"no bio provided."';
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.userProfileContainer}>
          <div className={classes.picAndUser}>
            <Gravatar
              className={classes.avatarPic}
              email={user.email || viewer.email}
            />
            <Typography className={classes.title} component="h1" gutterBottom>
              {user.fullname}
            </Typography>
          </div>
          <div>
            <Typography component="h2" className={classes.userInfo}>
              <span className={classes.itemNo}> {itemsofUser.length} </span>
              {itemsofUser.length >= 2 ? 'Items ' : 'Item '}
              shared{' '}
              <span className={classes.itemNo}>
                {user.borrowed.length}{' '}
              </span>{' '}
              {user.borrowed.length >= 2 ? 'Items ' : 'Item '}borrowed
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
  viewer: PropTypes.object
  // itemsofUser: PropTypes.object
};
export default withStyles(styles)(UserProfile);
