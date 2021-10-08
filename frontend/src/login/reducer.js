import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR} from './constants'

const initalState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: []
}

const login_reducer = (state=initalState, action) => {
  switch(action) {
    case LOGIN_REQUESTING:
      break
    
    case LOGIN_SUCCESS:
      break

    case LOGIN_ERROR:
      break

    default:
      return state
  }
}

export default login_reducer