import { SIGN_UP_REQUESTING } from "./constants"

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
    
    default:
      return state
  }
}

export default signupReducer