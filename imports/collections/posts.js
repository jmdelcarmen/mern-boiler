'use strict';

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
  //meteor-method = mongoDB queries
  'posts.post': function () {
    return Posts.insert({ text: `Logged: ${Date.now}`, date: new Date().toDateString() });
  },

  'posts.get': function () {
    return Posts.find({}, { limit: 5, sort: { date: -1 } }).fetch();
  }

});

//import Collection on both Client & Server file;
export const Posts = new Mongo.Collection('posts');
