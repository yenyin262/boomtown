import React from 'react';
// import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function UserProfile({ user, classes, items }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.userProfileContainer}>
          <Gravatar email="user.email" className={classes.userPic} />
          <Typography
            className={classes.title}
            component="h1"
            variant="display3"
            gutterBottom
          >
            {/* {user.email} || {user.fullname} */}yenyin262
          </Typography>
        </div>
        <Typography variant="h3" component="h2">
          {/* {items.itemowner.length} Items Shared
          {items.borrower.length}Items Borrowed */}
        </Typography>
        <Typography component="p">
          {/* {user.bio ? 'No bio provided' : user.bio} */}
        </Typography>
      </CardContent>
    </Card>
  );
}

// export default UserProfile;
export default withStyles(styles)(UserProfile);
