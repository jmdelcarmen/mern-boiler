'use strict';

export const LOG_SOMETHING = 'LOG_SOMETHING';

function getCollection() {
  return Meteor.callPromise('collections.get');
}

export function logSomething() {
  return {
    type: LOG_SOMETHING,
    payload: getCollection()
  }
}
