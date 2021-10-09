import { Component } from 'react';
import { Field } from 'redux-form'

class Login extends Component {
  render() {
    return(
      <div className="login">
        <form>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <button action="submit">LOGIN</button>
        </form>
      </div>
    )
  }
}

export default Login