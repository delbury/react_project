import { combineReducers } from 'redux'
import deadlineReducer from './deadlineReducer'

const reducers = combineReducers({
  deadline: deadlineReducer
});

export default reducers;