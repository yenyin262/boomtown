import React, { Component } from 'react';
import Share from './Share';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';
import PropTypes from 'prop-types';

class ShareContainer extends Component {
  render() {
    // const { match } = this.props;

    // const id = match.params.userid;
    // variables={{ id: id || viewer.id }}
    return (
      // <Query query={ALL_TAGS_QUERY}  fetchPolicy="network-only">
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          console.log(data, 'data in share ');
          return <Share classes={this.props.classes} tags={data.tags} />;
        }}
      </Query>
    );
  }
}

ShareContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareContainer);
