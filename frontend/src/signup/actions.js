import { SIGN_UP_REQUESTING } from "./constants";

const signupRequesting = ({ email, password }) => ({
  type: SIGN_UP_REQUESTING,
  email,
  password
})

export default signupRequesting