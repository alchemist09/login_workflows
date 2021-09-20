import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { createBrowserHistory } from 'history'

// React Router
import { Router, Route } from 'react-router'

// React Redux
import { Provider } from 'react-redux'

// Components
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

const store = configureStore()
const browserHistory = createBrowserHistory()

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router history={browserHistory}>
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
