import { SIGN_UP_ERROR, SIGN_UP_REQUESTING, SIGN_UP_SUCCESS } from "./constants"

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
}

const signupReducer = (state=initialState, action) => {
  switch(action.type) {
    case SIGN_UP_REQUESTING:
      return {
        ...initialState,
        requesting: true,
        messages: [{ body: 'Signing up......', time: new Date() }]
      }

    case SIGN_UP_SUCCESS:
      return {
        ...initialState,
        requesting: false,
        messages: [{body: 'Welcome! You Signed Up Successful', time: new Date() }]
      }

    case SIGN_UP_ERROR:
      return {
        ...initialState,
        requesting: false,
        errors: [{ body: 'Sign up failed. Errors encountered during process', time: new Date() }]
      }
    
    default:
      return state
  }
}

export default signupReducer