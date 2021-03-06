import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Items from '../pages/Items';
import Share from '../pages/Share';
import { ViewerContext } from '../context/ViewerProvider';

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return null;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      } else {
        return (
          <Fragment>
            <Switch>
              <Route exact path="/items" component={Items} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/:userid" component={Profile} />
              <Route path="/share" component={Share} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Fragment>
        );
      }
    }}
  </ViewerContext.Consumer>
);
