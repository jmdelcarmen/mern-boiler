'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Collections
import { Collection } from '../../imports/collections/collection';
//Components

class App extends Component {
  render() {
    return(
      <div>
        <h1 className="text-center">Welcome to App</h1>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('collection.content');
  //returned as this.props.content
  return { content: Collection.find().fetch() };

}, App);
