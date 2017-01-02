'use strict';

import { LOG_SOMETHING } from '../actions/index';

export default function (state = null, action) {
  switch(action.type) {
    case LOG_SOMETHING:
      return action.payload;
  }
  return state;
}
