'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';


//Components
import requireAuth from './components/require_auth';
import App from './components/app';
import Login from './components/section/login';
import Register from './components/section/register';
import Dashboard from './components/section/dashboard';

export default (
  <Route path="/" component={App}>
    <Route path="dashboard" component={requireAuth(Dashboard)} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
  </Route>
);
