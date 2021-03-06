import { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Messages from '../notifications/Messages'
import Errors from '../notifications/Errors'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import loginRequest from './actions'

class Login extends Component {

  static propTypes = {
    loginRequest: PropTypes.func,
    handleSubmit: PropTypes.func,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    })
  }

  submit = values => {
    console.log("values from redux form: ", values)
    const { email, password } = values
    this.props.loginRequest(email, password)
  }

  render() {
    const { handleSubmit, login: { requesting, successful, messages, errors } } = this.props
    return(
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            type="text"
            id="username"
            className="username"
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

        <div className="auth-messages">
          {!requesting && !!errors.length && (
            <Errors message="Failure to login due to: " errors={errors} />
          )}

          {!requesting && !!messages.length && (
            <Messages message={messages} />
          )}

          {requesting && <div>Logging in....</div>}

          {!requesting && !successful && (
            <Link to="/signup">Need to Signup? Click here</Link>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
})

const connectedForm = connect(mapStateToProps, { loginRequest })(Login)

const formed = reduxForm({
  form: 'login'
})(connectedForm)

export default formed