import { take, fork, cancel, call, put } from 'redux-saga/effects'

import { LOGIN_REQUESTING, LOGIN_ERROR, LOGIN_SUCCESS } from './constants'
import { CLIENT_UNSET } from '../client/constants'

function* logout() {}

function* loginFlow(email, password) {
  try {
    const result = yield call(loginApi, email, password)
    yield put({ type: LOGIN_SUCCESS, result })
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  }
}

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