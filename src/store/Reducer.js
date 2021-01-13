import { combineReducers } from '@reduxjs/toolkit';

import user from './user'
import posts from './post'
import counterReducer from './http/httpRequest';

export default combineReducers({

    user,
    posts


})