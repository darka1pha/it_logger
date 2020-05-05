import { combineReducers } from 'redux'
import logReaducer from './logReducer'
import techReducer from './techReducer'

export default combineReducers({
    log: logReaducer ,
    tech: techReducer
})