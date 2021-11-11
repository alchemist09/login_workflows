import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { routerMiddleware } from 'connected-react-router'
import history from '../history';

import rootReducer from '../index-reducer'
import rootSaga from '../index-sagas'

const compposeSetup = process.env.NODE_ENV !== 'production' && typeof window == 'object' 
                      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(history), 
    compposeSetup(applyMiddleware(
      sagaMiddleware, 
      routerMiddleware(history)
    ))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore