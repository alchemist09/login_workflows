import { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import signupRequest from './actions'
import PropTypes from 'prop-types'
import Errors from '../notifications/Errors'
import Messages from '../notifications/Messages'
import { Link } from 'react-router-dom';

class Signup extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    signupRequest: PropTypes.func,
    signup: PropTypes.shape({
      errors: PropTypes.array,
      messages: PropTypes.array,
      requesting: PropTypes.bool,
      successful: PropTypes.bool
    })
  }

  submit = values => {
    this.props.signupRequest(values)
    console.log(values)
  }

  render() {
    console.log(this.props)
    const { 
      handleSubmit, 
      signup: { requesting, successful, messages, errors } 
    } = this.props

    return (
      <div className="signup">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>Sign Up</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Passowrd</label>
          <Field
            name="passwoed"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button action="submit">SIGN UP</button>
        </form>

        <div className="auth-messages">
          {!requesting && !!errors.length && 
            (<Errors message="Unable to sign up due to: " errors={errors} />)
          }

          {!requesting && !!messages.length && (<Messages  messages={messages} />)}

          {!requesting && successful && (<Link to="/login">Click here to Login</Link>)}

          {!requesting && !successful && (<Link to="/login">Already a member? Log in here </Link>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    signup: state.signup
  }
}

const connectedComponent =  connect(mapStateToProps, { signupRequest })(Signup)

// connect component to redux form after connecting it to redux
const formed = reduxForm({
  form: 'signup'
})(connectedComponent)

export default formed