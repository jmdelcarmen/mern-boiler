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
        <div>Meteor</div>
        <div>React</div>
        <div>Boiler</div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('collection.content');
  //returned as this.props.content
  return { content: Collections.find().fetch() };

}, App);
