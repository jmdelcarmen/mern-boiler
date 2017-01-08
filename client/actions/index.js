'use strict';

import { browserHistory } from 'react-router';

import {
  AUTHENTICATE,
  POSTS_DATA
} from './types';

export function getPosts() {
  return {
    type: POSTS_DATA,
    payload: Meteor.callPromise('posts.get') //sends a promise to reducer_collection.js
  }
}

export function authenticate() {
  return {
    type: AUTHENTICATE,
    payload: !Meteor.userId() == false
  }
}
