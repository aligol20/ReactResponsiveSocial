
import { GET_USER, GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS, GET_USER_FAILED, GET_USER_SUCCESS } from '../ActionTypes'

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, isLoading: true }

        case GET_USERS_SUCCESS:
            // let requests = [...state.requests]
            // if (requests.length <= action.data) {
            //   return state
            // }

            return {
                ...state,
                users: action.data,
                isLoading: false
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case GET_USER:
            return { ...state, userLoading: true }
        case GET_USER_SUCCESS:
            return { ...state, userLoading: false, user: action.data }
        case GET_USER_FAILED:
            return { ...state, userLoading: false, user: action.error }




        default:
            return state
    }
}

const defaultState = {

    isLoading: false,
    users: [],
    error: null,
    user: null,
    userLoading: false


}