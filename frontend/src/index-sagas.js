import SignupSaga from './signup/sagas'

export default function* rootSaga () {  
  yield [
    SignupSaga()
  ]
}