import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './lib/check-auth'
import { isAuthenticated } from './lib/check-auth'

import './index.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { Provider } from 'react-redux'

import Layout from './layout/layout';
import App from './App';
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/signup">
            <Layout><Signup /></Layout>
          </Route>
          <Route path="/login">
            <Layout><Login /></Layout>
          </Route>
          <ProtectedRoute auth={isAuthenticated(store)} path="/widgets">
            <Layout><Widgets /></Layout>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
