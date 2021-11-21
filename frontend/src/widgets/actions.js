import { 
  WIDGET_CREATING,
  WIDGET_CREATE_SUCCESS,
  WIDGET_CREATE_ERROR,
  WIDGET_REQUESTING,
  WIDGET_REQUESTING_SUCCESS,
  WIDGET_REQUESTING_ERROR
} from "./constants"

export const widgetCreate = (client, widget) => ({
  type: WIDGET_CREATING,
  client,
  widget
})

export const widgetCreateSuccess = widget => ({
  type: WIDGET_CREATE_SUCCESS,
  widget
})

export const widgetCreateError = error => ({
  type: WIDGET_CREATE_ERROR,
  error
})

export const widgetRequest = client => ({
  type: WIDGET_REQUESTING,
  client
})

export const widgetRequestSuccessful = widget => ({
  type: WIDGET_REQUESTING_SUCCESS,
  widget
})

export const widgetRequestError = error => ({
  type: WIDGET_REQUESTING_ERROR,
  error
})

