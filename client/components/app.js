'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';
import Navbar from './header/navbar';

//Collections
import { Posts } from '../../imports/collections/posts';

class App extends Component {
  componentWillMount() {
    this.props.getPosts(); //testing action-creator
    Meteor.callPromise('posts.post'); //testing post inserts
  }

  render() {
    return(
      <div>
        <Navbar />
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
