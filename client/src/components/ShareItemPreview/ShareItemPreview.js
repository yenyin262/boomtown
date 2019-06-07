import React from 'react';
import CardItem from '../CardItem';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';

const ShareItemPreview = ({ shareItemPreview, tags }) => {
  console.log('this is sahre item preview', shareItemPreview);
  console.log('share item render', tags);

  return (
    <ViewerContext.Consumer>
      {({ viewer }) => {
        console.log(viewer, 'doed');
        return <CardItem item={shareItemPreview} viewer={viewer} />;
      }}
    </ViewerContext.Consumer>
  );
};

const mapStatetoProps = ({ shareItemPreview }) => ({ shareItemPreview });

// const mapStatetoProps = state => {
//   return { ...state };
// };
export default connect(mapStatetoProps)(ShareItemPreview);
