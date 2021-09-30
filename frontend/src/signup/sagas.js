import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGN_UP_REQUESTING, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants'

const signup_url = process.env.REACT_APP_API_URL

function signUpApi(email, password) {
  return fetch(signup_url, {
      method: 'POST',
      headers: 'Content-Type: application/json',
      body: JSON.stringify({ email, password })
    }
  )
}

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