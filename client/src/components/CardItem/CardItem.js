import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
// import AvatarImg from '../../images/avatar.png';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import styles from './styles';
import Gravatar from 'react-gravatar';

import CardHeader from '@material-ui/core/CardHeader';

class CardItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const { item } = this.props;

    return (
      <Grid container spacing={24} item xs={12}>
        <Grid item xs={12} key={item.id}>
          <Card className={classes.card} key={item.id}>
            <CardMedia className={classes.media} image={item.imageurl} />
            <div className={classes.containerProfile}>
              <Link to="/profile">
                <Gravatar className={classes.avatarPic} />
                {/* <Avatar alt="User's Avatar" src={AvatarImg} /> */}
              </Link>
              <Typography component="p" color="textSecondary" gutterBottom>
                {moment(item.created)
                  .startOf('day')
                  .fromNow()}
              </Typography>
            </div>
            {/* <CardHeader title= /> */}
            <CardContent>
              <Typography
                component="h2"
                variant="h2"
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
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(CardItem);
// item.tags[0].title - need to concat if more than one tags
