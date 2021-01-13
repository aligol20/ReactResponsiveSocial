import * as creators from './ActionCreators'
import { httpRequest } from '../../http/httpRequest'

export default (id) => dispatch => {
    dispatch(creators.getUserPostsAction())
    dispatch(httpRequest(creators.getUserPostsSuccessAction, creators.getUserPostsFailedAction, 'GET', `/user/${id}/post`))
}
