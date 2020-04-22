import { combineReducers } from 'redux'
import logReaducer from './logReducer'

export default combineReducers({
    log: logReaducer
})