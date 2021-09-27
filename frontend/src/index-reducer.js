import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import client from './client/reducer'
import signup from './signup/reducer'

const rootReducer = combineReducers({
  form,
  client,
  signup
})

export default rootReducer