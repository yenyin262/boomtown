import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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

class CardItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { classes } = this.props;
    const { item } = this.props;
    console.log('This is the second one', item);
    return (
      <Link className={classes.card} to="/profile">
        <Card>
          <CardMedia className={classes.media} image={item.imageurl} />
          <div>
            <div className={classes.containerProfile}>
              <Gravatar
                className={classes.avatarPic}
                email={item.itemowner.email}
              />
              <Typography component="p">{item.itemowner.fullname}</Typography>
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
          {/* <CardHeader title= /> */}
          <CardContent>
            <Typography
              component="h2"
              gutterBottom
              className={classes.titleName}
            >
              {item.title}
            </Typography>
            <Typography
              component="p"
              color="textSecondary"
              gutterBottom
              className={classes.tagName}
            >
              {item.tags[0].title}
            </Typography>
            <Typography component="h3" className={classes.descriptionName}>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" className={classes.button}>
              <Typography component="h3" className={classes.descriptionName}>
                Borrow
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </Link>
    );
  }
}
export default withStyles(styles)(CardItem);
// item.tags[0].title - need to concat if more than one tags
