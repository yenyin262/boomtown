import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import NavigationBar from '../../components/NavigationBar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Share = ({ classes, tags }) => {
  return (
    <div>
      <div>
        <NavigationBar pageType={null} />
      </div>

      <div className={classes.container}>
        <div className={classes.previewCard}>
          <ShareItemPreview />
        </div>
        <div>
          <ShareItemForm tags={tags} />
        </div>
      </div>
    </div>
  );
};

// export default Share;
export default withStyles(styles)(Share);
