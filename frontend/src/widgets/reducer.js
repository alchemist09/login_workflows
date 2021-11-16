import { WIDGET_CREATING, WIDGET_CREATE_SUCCESS, WIDGET_CREATE_ERROR} from "./constants"

const initialState = {
  list: [],
  requesting: false,
  successful: false,
  messages: [],
  errors: []
}

const widgetReducer = (state=initialState, action) => {
  switch(action.type) {
    case WIDGET_CREATING:
      return {
        ...state,
        requesting: true,
        messages: [
          {
            body: `Widget ${action.widget.name} being created.....`,
            time: new Date()
          }
        ]
      }
    
    case WIDGET_CREATE_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        messages: [
          {
            body: `Widget ${action.widget.name} has been created`,
            time: new Date()
          }
        ]
      }

    case WIDGET_CREATE_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ])
      }

    default:
      return state
  }
}

export default widgetReducer