// import React from 'react';
import React, { Component } from 'react';
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

const CardItem = ({ classes, item, viewer, updatedItem }) => {
  let getTheTags;
  let a = item;
  let b = item.tags;
  let c = item.tags[0];
  let tags = item.tags.length > 0 ? item.tags.join(', ') : item.tags;

  console.log(item);
  console.log(updatedItem);
  if (a != null && b != null && c != null) {
    console.log('Card Item true');
    getTheTags = item.tags[0].title;
    console.log(item.tags[0].title, 'tags item');
  } else {
    console.log('Card Item false');
    getTheTags = '';
  }

  // d = getItemOwner;
  // if (a != null && d != null) {
  //   getItemOwner = item.itemowner.id;
  // } else {
  //   getItemOwner = { viewer };
  // }
  console.log('card item', item);
  return (
    <Link className={classes.card} to={`/profile/${item.itemowner.id}`}>
      <div className={classes.mainContainerCard}>
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
      </div>
    </Link>
  );
};

// class CardItem extends Component {
//   render() {
//     const { classes } = this.props;
//     const { item } = this.props;
//     console.log('This is the props', this.props);
//     console.log('This is the second one', item);
//     let tags = item.tags.length > 0 ? item.tags.join(', ') : item.tags;

//     let getTheTags;
//     let a = item;
//     let b = item.tags;
//     let c = item.tags[0];

//     if (a != null && b != null && c != null) {
//       getTheTags = item.tags[0].title;
//     } else {
//       getTheTags = '';
//     }

//     return (
//       <Link className={classes.card} to={`/profile/${item.itemowner.id}`}>
//         <Card className={classes.mainCard}>
//           <CardMedia
//             className={classes.media}
//             image={
//               item.imageurl
//                 ? item.imageurl
//                 : 'http://via.placeholder.com/350x250?text=Please+select+an+image'
//             }
//           />
//           <div>
//             <div className={classes.containerProfile}>
//               <Gravatar
//                 className={classes.avatarPic}
//                 email={item.itemowner.email}
//               />
//               <div>
//                 <Typography component="p">{item.itemowner.fullname}</Typography>
//                 <Typography
//                   component="p"
//                   color="textSecondary"
//                   gutterBottom
//                   className={classes.itemCreated}
//                 >
//                   {moment(item.created)
//                     .startOf('day')
//                     .fromNow()}
//                 </Typography>
//               </div>
//             </div>
//           </div>
//           <CardContent>
//             <Typography
//               component="h2"
//               gutterBottom
//               className={classes.titleName}
//             >
//               {item.title}
//             </Typography>
//             <Typography
//               component="p"
//               color="textSecondary"
//               className={classes.tagName}
//             >
//               {getTheTags ? getTheTags : tags}
//             </Typography>

//             <Typography component="h3" className={classes.descriptionName}>
//               {item.description}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button variant="outlined" className={classes.button}>
//               <Typography component="h3" className={classes.descriptionName}>
//                 Borrow
//               </Typography>
//             </Button>
//           </CardActions>
//         </Card>
//       </Link>
//     );
//   }
// }

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object
};
export default withStyles(styles)(CardItem);
