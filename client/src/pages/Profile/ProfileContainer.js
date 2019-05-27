import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { Query } from 'react-apollo';
// import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
// import FullScreenLoader from '../../components/FullScreenLoader';

class ProfileContainer extends Component {
  render() {
    return (
      <Profile />
      // <Query query={ALL_USER_ITEMS_QUERY}>
      //   {({ loading, error, data }) => {
      //     // if (loading) return <FullScreenLoader inverted />;
      //     if (loading) return <p>Loading...</p>;
      //     if (error) return <p>{`Error! ${error.message}`}</p>;
      //     return <Profile classes={this.props.classes} items={data.items} />;
      //   }}
      // </Query>
    );
  }
}

export default withStyles(styles)(ProfileContainer);
