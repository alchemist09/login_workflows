import { take, fork, cancel, call } from 'redux-saga/effects'

import { LOGIN_REQUESTING, LOGIN_ERROR } from './constants'
import { CLIENT_UNSET } from '../client/constants'

function* logout() {}

function* loginFlow(email, password) {}

function* loginWatcher() {
  while(true) {
    // LOGIN PROCEDDURES
    const { email, password } = yield take(LOGIN_REQUESTING)

    const task = yield fork(loginFlow, email, password)

    const action = yield take([CLIENT_UNSET, LOGIN_ERROR])

    if(action.type === CLIENT_UNSET) {
      yield cancel(task)
    }

    yield call(logout)
  }
}

export default loginWatcher