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
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: []
      }
    
    case LOGIN_SUCCESS:
      return {
        requesting: false,
        successful: true,
        messages: [],
        errors: []
      }

    case LOGIN_ERROR:
      return {
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([{ 
          body: action.error.toString(),
          time: new Date()
        }])
      }

    default:
      return state
  }
}

export default login_reducer