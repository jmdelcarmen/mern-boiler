'use strict';

import { Meteor } from 'meteor/meteor';

//Collections
import { Posts } from '../imports/collections/posts';

Meteor.startup(() => {
  //Publish and Subscribe system
  Meteor.publish('posts.content', function () {
    return Posts.find({}, {});
  });

  console.log('Construction ongoing at port 3000 . . .');
});
