'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

//Collections
import { Posts } from '../../imports/collections/posts';

class App extends Component {
  componentWillMount() {
    this.props.getPosts(); //testing action-creator
    Meteor.callPromise('posts.post'); //testing post inserts
  }

  render() {
    console.log(this.props.posts); //testing state
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
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(App);
