import React from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

const NoMatchPage = ({ classes }) => {
  return <h3 className={classes.error}>404 - Page Not found</h3>;
};

const ProfileContainer = ({ classes, match }) => {
  const id = match.params.userid;
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        return (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{ id: id || viewer.id }}
            fetchPolicy="network-only"
          >
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader inverted />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              let GetUserProfile;
              if (!data.user) {
                GetUserProfile = <NoMatchPage classes={classes} />;
              } else {
                GetUserProfile = (
                  <Profile
                    classes={classes}
                    itemsofUser={data.user.items}
                    user={data.user}
                    viewer={viewer}
                  />
                );
              }
              return <div>{GetUserProfile}</div>;
            }}
          </Query>
        );
      }}
    </ViewerContext.Consumer>
  );
};

ProfileContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileContainer);
