import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import WidgetSaga from './widgets/sagas'
import { all, fork } from '@redux-saga/core/effects'

export default function* rootSaga () {  
  console.log("******* 555555 *********")
  yield all([
    fork(SignupSaga),
    fork(LoginSaga),
    fork(WidgetSaga)
  ])
}