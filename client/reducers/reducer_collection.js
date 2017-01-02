'use strict';

import { LOG_SOMETHING } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
    case LOG_SOMETHING:
      return action.payload;
  }
  return state;
}
