import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import clientReducer from './client/reducer'
import signup from './signup/reducer'

const rootReducer = combineReducers({
  form,
  client: clientReducer,
  signup
})

export default rootReducer