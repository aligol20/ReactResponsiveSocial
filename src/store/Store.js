import { configureStore } from '@reduxjs/toolkit';

import user from './user'
import posts from './post'
import Reducer from './Reducer'

export default configureStore({

    reducer: {
        user: user,
        post: posts
    }


})