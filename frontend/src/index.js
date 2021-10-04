import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
// import { createBrowserHistory } from 'history'

// React Router
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// React Redux
import { Provider } from 'react-redux'

// Components
// import Login from './login'
// import Signup from './signup'
// import Widgets from './widgets'

const store = configureStore()
// const browserHistory = createBrowserHistory()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
