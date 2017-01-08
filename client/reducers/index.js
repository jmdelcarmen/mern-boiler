'use strict';

import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  authenticated: AuthReducer,
  posts: PostsReducer
});

export default rootReducer;
