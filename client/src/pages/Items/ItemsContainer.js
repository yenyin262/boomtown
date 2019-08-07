import React, { Component } from 'react';
import Items from './Items';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import PropTypes from 'prop-types';
import { ViewerContext } from '../../context/ViewerProvider';

class ItemsContainer extends Component {
  render() {
    const { match } = this.props;
    const id = match.params.userid;
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <Query
              query={ALL_ITEMS_QUERY}
              variables={{ id: id || viewer.id }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader inverted />;
                if (error) return <p>{`Error! ${error.message}`}</p>;
                return (
                  <Items classes={this.props.classes} items={data.items} />
                );
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

ItemsContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ItemsContainer);
