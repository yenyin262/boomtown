import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from './styles';
import Gravatar from 'react-gravatar';

const CardItem = ({ classes, item, viewer }) => {
  let getTheTags;
  let a = item;
  let b = item.tags;
  let c = item.tags[0];
  let tags = item.tags.length > 0 ? item.tags.join(', ') : item.tags;

  if (a != null && b != null && c != null) {
    getTheTags = item.tags[0].title;
  } else {
    getTheTags = '';
  }

  return (
    <Link className={classes.card} to={`/profile/${item.itemowner.id}`}>
      <Card className={classes.mainCard}>
        <CardMedia
          className={classes.media}
          image={
            item.imageurl
              ? item.imageurl
              : 'http://via.placeholder.com/350x250?text=Please+select+an+image'
          }
        />
        <div>
          <div className={classes.containerProfile}>
            <Gravatar
              className={classes.avatarPic}
              email={item.itemowner.email || viewer.email}
            />
            <div>
              <Typography component="p">
                {item.itemowner.fullname || viewer.fullname}
              </Typography>
              <Typography
                component="p"
                color="textSecondary"
                gutterBottom
                className={classes.itemCreated}
              >
                {moment(item.created)
                  .startOf('day')
                  .fromNow()}
              </Typography>
            </div>
          </div>
        </div>
        <CardContent>
          <Typography component="h2" className={classes.titleName}>
            {item.title}
          </Typography>
          <Typography
            component="p"
            color="textSecondary"
            className={classes.tagName}
          >
            {getTheTags ? getTheTags : tags}
          </Typography>

          <Typography component="h3" className={classes.descriptionName}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" className={classes.button}>
            <Typography component="h3" className={classes.buttonText}>
              Borrow
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object
};
export default withStyles(styles)(CardItem);
