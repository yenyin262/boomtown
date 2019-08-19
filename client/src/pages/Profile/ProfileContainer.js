import React from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoMatchPage = ({ classes }) => {
  return (
    <div>
      <div>
        <h1 className={classes.error}>404 - Page Not found</h1>{' '}
        <Link to="/items">
          <h5 className={classes.text}>
            {' '}
            Click here to go back to items Page{' '}
          </h5>
        </Link>
      </div>
    </div>
  );
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
