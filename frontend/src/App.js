import logo from './logo.svg';
import './App.css';
import browserHistory from './history'
import { Router, Route, Switch } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Widget Factory</h2>
      </header>
      <section className="App-body">
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/">
              <Signup />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/widgets">
              <Widgets />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
