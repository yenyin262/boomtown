import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  render() {
    const { classes, match } = this.props;

    const id = match.params.userid;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          console.log('this is viewer', viewer);
          return (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: id || viewer.id }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader inverted />;
                console.log('data ', data);
                console.log(data.user, 'datauser');
                console.log(data.user.items, 'datauseritems');
                if (error) return <p>{`Error! ${error.message}`}</p>;
                return (
                  <Profile
                    classes={classes}
                    itemsofUser={data.user.items}
                    user={data.user}
                    viewer={viewer}
                  />
                );
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}
ProfileContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileContainer);
