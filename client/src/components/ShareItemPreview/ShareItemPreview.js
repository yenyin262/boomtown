import React from 'react';
import CardItem from '../CardItem';
import { connect } from 'react-redux';

// import { Card } from '@material-ui/core';

const ShareItemPreview = ({ shareItemPreview }) => {
  console.log(shareItemPreview);
  return <p>hi</p>;
  //return <CardItem item={shareItemPreview} />;
};
const mapStatetoProps = ({ shareItemPreview }) => {
  return shareItemPreview;
};

export default connect(mapStatetoProps)(ShareItemPreview);
