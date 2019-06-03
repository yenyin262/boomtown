import React from 'react';
// import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { NULL } from 'graphql/language/kinds';
// import { renderToStringWithData } from 'react-apollo';

function UserProfile({ classes, user }) {
  console.log('show user props', user);
  let userBio;
  if (user.bio === null) {
    userBio = 'no bio provided';
  } else {
    userBio = user.bio;
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.userProfileContainer}>
          <div className={classes.picAndUser}>
            <Gravatar className={classes.avatarPic} email={user.email} />
            <Typography className={classes.title} component="h1" gutterBottom>
              {user.fullname}
            </Typography>
          </div>
          <div>
            <Typography component="h2" className={classes.userInfo}>
              <span className={classes.itemNo}> {user.items.length}</span> Item
              shared{' '}
              <span className={classes.itemNo}>{user.borrowed.length} </span>{' '}
              Item borrowed
              {/* {user.items.length <= 1 ? '1 Item Shared' : {user.items.length `Items Shared`}} */}
            </Typography>
          </div>
        </div>
        <Typography component="p" className={classes.biography}>
          {userBio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(UserProfile);
