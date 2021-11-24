import { takeLatest, call, put } from 'redux-saga/effects'
import { handleApiErrors } from '../lib/api-errors'
import { widgetCreateError, widgetCreateSuccess } from './actions'
import { WIDGET_CREATING, WIDGET_REQUESTING } from './constants'

const widget_url = `${process.env.REACT_APP_API_URL}/api/Clients`

const handleRequest = request => {
  return request
    .then(handleApiErrors)
    .then(res => res.json())
    .then(json => json)
    .catch(error => { throw error })
}

const widgetCreateApi = (client, widget) => {
  const url = `${widget_url}/${client.id}/widgets`
  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: client.token.id || undefined
    },
    body: JSON.stringify(widget)
  })
  
  return handleRequest(response)
}

function* widgetCreateFlow(action) {
  try {
    const { client, widget } = action
    const createdWidget = yield call(widgetCreateApi, client, widget)
    yield put(widgetCreateSuccess(createdWidget))
  } catch (error) {
    yield put(widgetCreateError(error))
  }
}

function* widgetWatcher() {
  yield takeLatest(WIDGET_CREATING, widgetCreateFlow)
  yield takeLatest(WIDGET_REQUESTING, widgetRequestFlow)
}

export default widgetWatcher