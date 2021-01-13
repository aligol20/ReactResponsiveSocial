import * as type from '../ActionTypes'


export const getPostsAction = () => ({ type: type.GET_POSTS })
export const getPostsSuccessAction = data => ({ type: type.GET_POSTS_SUCCESS, data })
export const getPostsFailedAction = error => ({ type: type.GET_POSTS_FAILED, error })

export const getPostAction = () => ({ type: type.GET_POST })
export const getPostSuccessAction = data => ({ type: type.GET_POST_SUCCESS, data })
export const getPostFailedAction = error => ({ type: type.GET_POST_FAILED, error })

export const getUserPostsAction = () => ({ type: type.GET_USER_POSTS })
export const getUserPostsSuccessAction = () => ({ type: type.GET_USER_POSTS_SUCCESS })
export const getUserPostsFailedAction = () => ({ type: type.GET_USER_POSTS_FAILED })