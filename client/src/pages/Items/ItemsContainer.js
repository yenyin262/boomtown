import React, { Component } from 'react';
import Items from './Items';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import PropTypes from 'prop-types';

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          // if (loading) return <FullScreenLoader inverted />;
          // console.log('my_data', data.items);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

ItemsContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ItemsContainer);
