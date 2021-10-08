import { LOGIN_REQUESTING } from './constants'

const login_requesting = (email, passowrd) => ({
  type: LOGIN_REQUESTING,
  email,
  passowrd
})

export default login_requesting