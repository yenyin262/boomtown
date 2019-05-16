import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Items from '../pages/Items';
import Share from '../pages/Share';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */
    /**
     * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
     *
     * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
     *
     * Later, we'll add logic to send users to one set of routes if they're logged in,
     * or only view the /welcome page if they are not.
     */}
    <Switch>
      <Route exact path="/items" component={Items} />
      <Route exact path="/welcome" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userid" component={Profile} />
      <Route path="/share" component={Share} />
      <Redirect from="*" to="/items" />
    </Switch>
  </Fragment>
);
