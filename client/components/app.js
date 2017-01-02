'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logSomething } from '../actions/index';

//Collections
import { Collection } from '../../imports/collections/collection';

class App extends Component {
  componentWillMount() {
    this.props.logSomething(); //testing action-creator
  }

  render() {
    console.log(this.props.collection); //testing action-creator
    return(
      <div>
        <h1 className="text-center"><i>Meteor + React + Redux</i></h1>
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
