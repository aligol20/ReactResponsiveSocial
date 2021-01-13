import * as creators from './ActionCreators'
import { httpRequest } from '../../http/httpRequest'

export default (postId) => dispatch => {
    dispatch(creators.getPostAction())
    dispatch(httpRequest(creators.getPostSuccessAction, creators.getPostFailedAction, 'GET', `/post/${postId}`))
}
