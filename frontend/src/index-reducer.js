import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import clientReducer from './client/reducer'

const rootReducer = combineReducers({
  form,
  client: clientReducer
})

export default rootReducer