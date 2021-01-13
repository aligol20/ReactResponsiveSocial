import * as creators from './ActionCreators'
import { httpRequest } from '../../http/httpRequest'

export default () => dispatch => {
    dispatch(creators.getUsersAction())
    dispatch(httpRequest(creators.getUsersSuccessAction, creators.getUsersFailedAction, 'GET', '/user'))
}
