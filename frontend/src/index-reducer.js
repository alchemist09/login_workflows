import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import client from './client/reducer'
import signup from './signup/reducer'
import login from './login/reducer'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  form,
  client,
  signup,
  login
})

export default rootReducer