import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    login:false,
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.GET_LOGIN:
            return state.set('login', true)
        default:
            return state
    }
}