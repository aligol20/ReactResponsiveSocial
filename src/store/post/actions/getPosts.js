import * as creators from './ActionCreators'
import { httpRequest } from '../../http/httpRequest'

export default () => dispatch => {
    dispatch(creators.getPostsAction())
    dispatch(httpRequest(creators.getPostsSuccessAction, creators.getPostsFailedAction, 'GET', '/post'))
}
