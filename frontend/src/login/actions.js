import { LOGIN_REQUESTING } from './constants'

const login_request = (email, password) => ({
  type: LOGIN_REQUESTING,
  email,
  password
})

export default login_request