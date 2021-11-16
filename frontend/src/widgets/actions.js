import { WIDGET_CREATING, WIDGET_CREATE_SUCCESS, WIDGET_CREATE_ERROR } from "./constants"

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

