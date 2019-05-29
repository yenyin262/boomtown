import React from 'react';
// import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { renderToStringWithData } from 'react-apollo';

function UserProfile({ classes, item }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.userProfileContainer}>
          <Gravatar
            className={classes.avatarPic}
            // email={item.itemowner.email}
          />
          <Typography className={classes.title} component="h1" gutterBottom>
            yenyin262
            {/* {item.itemowner.fullname} */}
          </Typography>
        </div>
        <Typography component="h2">
          {/* {item.itemowner.length} Items Shared
          {item.borrower.length}Items Borrowed */}
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
