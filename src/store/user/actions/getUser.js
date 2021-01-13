import * as creators from './ActionCreators'
import { httpRequest } from '../../http/httpRequest'

export default (userId) => dispatch => {
    dispatch(creators.getUserAction())
    dispatch(httpRequest(creators.getUserSuccessAction, creators.getUserFailedAction, 'GET', `/user/${userId}`))
}
