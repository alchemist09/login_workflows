import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import browserHistory from './history'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import { Provider } from 'react-redux'

import Layout from './layout/layout';
import App from './App';
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

const logged_in = false
const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
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
          <Route>
            { logged_in ? <Layout><Widgets /></Layout> : <Redirect to={{
              pathname: "/login"
            }} />}
          </Route>
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
