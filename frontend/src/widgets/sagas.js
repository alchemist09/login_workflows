import { takeLatest } from 'redux-saga/effects'
import { WIDGET_CREATING} from './constants'

function* widgetWatcher() {
  yield takeLatest(WIDGET_CREATING, widgetCreateFlow)
}

export default widgetWatcher