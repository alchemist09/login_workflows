import { takeLatest, call, put } from 'redux-saga/effects'
import { SIGN_UP_REQUESTING, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants'
import { handleApiErrors } from '../lib/api-errors'

const signup_url = `${process.env.REACT_APP_API_URL}/api/Clients`

function signUpApi(email, password) {
  return fetch(signup_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }
  ).then(handleApiErrors)
   .then(response => response.json())
   .catch(error => { throw error })
}

function* signUpUser(action) {
  try {
    const { email, password } = action
    const result = yield call(signUpApi, email, password)
    yield put({ type: SIGN_UP_SUCCESS, result})
  } catch (error) {
    yield put({ type: SIGN_UP_ERROR, error})
  }
}

function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUESTING, signUpUser)
}

export default signUpWatcher