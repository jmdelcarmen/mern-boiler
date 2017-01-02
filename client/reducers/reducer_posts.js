'use strict';

import { POSTS_DATA } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
    case POSTS_DATA:
      return action.payload; //<-- redux-promise middleware at work here
  }
  return state;
}
