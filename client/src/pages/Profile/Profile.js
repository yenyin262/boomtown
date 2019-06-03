import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavigationBar from '../../components/NavigationBar';
import CardItem from '../../components/CardItem';
import { ViewerContext } from '../../context/ViewerProvider';

const Profile = ({ classes, user }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        return (
          <div>
            <NavigationBar pageType={true} />
            <div className={classes.profileContainer}>
              <UserProfile user={user} />
              {/* <CardItem items={items} /> */}
            </div>
          </div>
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default withStyles(styles)(Profile);
