'use strict';

import { AUTHENTICATE } from '../actions/types';

export default function (state = !Meteor.userId() == false, action) {
    switch(action.type) {
        case AUTHENTICATE:
            return action.payload;
    }
    return state;
}