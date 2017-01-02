'use strict';

import { Meteor } from 'meteor/meteor';

//Collections
import { Collection } from '../imports/collections/collection';

Meteor.startup(() => {
  //Publish and Subscribe system

  Meteor.publish('collection.content', function () {
    return Collection.find({}, {});
  });


  console.log('Construction ongoing at port 3000 . . .');
});
