'use strict';

import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Components
import App from './components/app';

const routes =(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(routes, document.querySelector('.app-container'));
})
