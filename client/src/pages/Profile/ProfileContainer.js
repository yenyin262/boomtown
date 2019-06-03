import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ViewerContext } from '../../context/ViewerProvider';

class ProfileContainer extends Component {
  render() {
    const { classes, match } = this.props;
    const id = match.params.userid;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: id || viewer.id }}
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader inverted />;
                // if (loading) return <p>Loading...</p>;
                if (error) return <p>{`Error! ${error.message}`}</p>;
                return <Profile classes={classes} user={data.user} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default withStyles(styles)(ProfileContainer);
