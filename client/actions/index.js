'use strict';

export const POSTS_DATA = 'POSTS_DATA';

export function getPosts() {
  return {
    type: POSTS_DATA,
    payload: Meteor.callPromise('posts.get') //sends a promise to reducer_collection.js
  }
}
