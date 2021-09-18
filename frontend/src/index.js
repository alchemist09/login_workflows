import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'

// Redux-Saga
import createSagaMiddleware from 'redux-saga'

// React Router
import { Router, Route } from 'react-router'

// Components
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

// Root Reducer & Root Saga
import rootReducer from './index-reducer'
import rootSaga from './index-sagas'

const sagaMiddleware = createSagaMiddleware()

const compposeSetup = process.env.NODE_ENV !== 'production' && typeof window == 'object' 
                      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(rootReducer, compposeSetup(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/widgets" component={Widgets} />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
