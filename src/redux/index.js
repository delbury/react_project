import { createStore } from 'redux';

import deadlineReducer from './reducers/deadlineReducer'

const store = createStore(deadlineReducer)

export default store;