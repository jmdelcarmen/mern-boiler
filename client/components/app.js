'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logSomething } from '../actions/index';
// import { createContainer } from 'meteor/react-meteor-data';

//Collections
import { Collection } from '../../imports/collections/collection';

class App extends Component {
  componentWillMount() {
    this.props.logSomething();
  }

  render() {
    console.log(this.props.collection);
    return(
      <div>
        <h1 className="text-center">Welcome to App</h1>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps, { logSomething })(App);
