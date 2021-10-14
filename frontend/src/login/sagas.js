import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'

import { LOGIN_REQUESTING, LOGIN_ERROR, LOGIN_SUCCESS } from './constants'
import { CLIENT_UNSET } from '../client/constants'
import { setClient } from '../client/actions'
import browserHistory from '../history'

function* logout() {}

function* loginFlow(email, password) {
  let token
  try {
    token = yield call(loginApi, email, password)

    yield put(setClient(token))

    yield put({ type: LOGIN_SUCCESS })

    localStorage.setItem('token', JSON.stringify(token))

    browserHistory.push('/widgets')
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    if(yield cancelled()) {
      browserHistory.push('/login')
    }
  }
  return token
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