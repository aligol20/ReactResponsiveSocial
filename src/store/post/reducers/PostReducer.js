
import { GET_POST, GET_POST_FAILED, GET_POST_SUCCESS, GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED, GET_USER_POSTS, GET_USER_POSTS_SUCCESS, GET_USER_POSTS_FAILED } from '../ActionTypes'

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, isLoading: true }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.data,
                isLoading: false
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case GET_POST:
            return { ...state, postLoading: true }
        case GET_POST_SUCCESS:
            return { ...state, postLoading: false, post: action.data }
        case GET_POST_FAILED:
            return { ...state, postLoading: false, post: action.error }

        case GET_USER_POSTS:
            return { ...state, userPostsLoading: true }
        case GET_USER_POSTS_SUCCESS:
            return { ...state, postLoading: false, userPosts: action.data }
        case GET_USER_POSTS_FAILED:
            return { ...state, postLoading: false, userPostsError: action.error }




        default:
            return state
    }
}

const defaultState = {

    isLoading: false,
    posts: [],
    error: null,
    post: null,
    postLoading: false,
    userPostsLoading: false,
    userPosts: [],
    userPostsError: []


}