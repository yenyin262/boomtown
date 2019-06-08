import React from 'react';
import CardItem from '../CardItem';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        return <CardItem item={shareItemPreview} viewer={viewer} />;
      }}
    </ViewerContext.Consumer>
  );
};

const mapStatetoProps = ({ shareItemPreview }) => ({ shareItemPreview });

export default connect(mapStatetoProps)(ShareItemPreview);
