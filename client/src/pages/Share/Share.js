import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import NavigationBar from '../../components/NavigationBar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Share = ({ classes, tags }) => {
  return (
    <div>
      <NavigationBar showShareIcon={null} />

      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.previewCard}>
            <ShareItemPreview />
          </div>
          <div className={classes.shareForm}>
            <ShareItemForm tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
