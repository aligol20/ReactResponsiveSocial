import * as type from '../ActionTypes'


export const getUsersAction = () => ({ type: type.GET_USERS })
export const getUsersSuccessAction = data => ({ type: type.GET_USERS_SUCCESS, data })
export const getUsersFailedAction = error => ({ type: type.GET_USERS_FAILED, error })

export const getUserAction = () => ({ type: type.GET_USER })
export const getUserSuccessAction = data => ({ type: type.GET_USER_SUCCESS, data })
export const getUserFailedAction = error => ({ type: type.GET_USER_FAILED, error })