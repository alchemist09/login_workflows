import { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import signupRequest from './actions'

class Signup extends Component {
  render() {
    return <div>Sign Up</div>
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