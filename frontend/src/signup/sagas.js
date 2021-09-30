import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGN_UP_REQUESTING, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants'

function* signUpUser(action) {
  try {
    const { email, password } = action
    const result = yield call(signUpApi, email, password)
    yield put({SIGN_UP_SUCCESS, result})
  } catch (error) {
    yield put({SIGN_UP_ERROR, error})
  }
}

function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUESTING, signUpUser)
}

export default signUpWatcher