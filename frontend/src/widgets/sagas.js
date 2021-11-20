import { takeLatest, call, put } from 'redux-saga/effects'
import { widgetCreateError, widgetCreateSuccess } from './actions'
import { WIDGET_CREATING} from './constants'


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
}

export default widgetWatcher