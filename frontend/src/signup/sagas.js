import { takeLatest } from 'redux-saga/effects'
import { SIGN_UP_REQUESTING } from './constants'

function* signUpUser() {

}

function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUESTING, signUpUser)
}

export default signUpWatcher