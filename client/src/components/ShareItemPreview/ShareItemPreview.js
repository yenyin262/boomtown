import React from 'react';
import CardItem from '../CardItem';
import { connect } from 'react-redux';

// import { Card } from '@material-ui/core';

const ShareItemPreview = ({ shareItemPreview }) => {
  return <CardItem item={shareItemPreview} />;
};
const mapStatetoProps = ({ shareItemPreview }) => {
  return shareItemPreview;
};
// const mapStatetoProps = state => {
//   return { ...state };
// };
export default connect(mapStatetoProps)(ShareItemPreview);
