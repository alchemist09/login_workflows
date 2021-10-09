import { LOGIN_REQUESTING } from './constants'

const login_request = (email, passowrd) => ({
  type: LOGIN_REQUESTING,
  email,
  passowrd
})

export default login_request