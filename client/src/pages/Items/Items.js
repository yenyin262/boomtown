import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles';

// import NavBar from '../../components/NavigationBar/NavBar';

const Items = ({ classes, items }) => {
  return (
    <div>
      <p>
        <AppBar position="static">
          <img src="/images/boomtown.svg" alt="boomtown_logo" />
          <Toolbar>
            <Button
              variant="extended"
              color="primary"
              aria-label="Add"
              className={classes.margin}
            >
              <Icon className={classes.icon}>add_circle</Icon> Share Something
            </Button>
            <MoreVertIcon />
          </Toolbar>
        </AppBar>
        {/* This is the items page located at <code>/items</code>. */}
      </p>
      {items.map(item => {
        let tags = item.tags.map(tag => tag.title);

        console.log(items);
        return (
          <Grid>
            <Card className={classes.card} key={item.id}>
              <CardMedia className={classes.media} image={item.imageurl} />
              <CardHeader title={item.title} subheader={tags.join(', ')} />
              <CardContent>
                <Typography component="p">{item.description}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" className={classes.button}>
                  Borrow
                </Button>
                {/* <Button size="small" color="primary">
                  Borrow
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(Items);
