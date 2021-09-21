import { Component } from 'react';
import { connect } from 'react-redux'
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