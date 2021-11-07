import { combineReducers } from 'redux'

import commentsReducer from './commentreducers'

const rootReducer = combineReducers({
  comments: commentsReducer,
})

export default rootReducer
