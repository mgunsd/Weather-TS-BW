import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home, Detail, NotFound404 } from 'pages';

const Routes = () => {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail' component={Detail} />
        <Route exact path='/not-found' component={NotFound404} />
        <Redirect to={'/not-found'} />
      </Switch>
    </Router>
  );
};

export default Routes;
