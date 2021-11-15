import { Route, Redirect } from 'react-router-dom'
// import { store } from '../index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const isAuthenticated = authToken => {
  let token = localStorage.getItem("token")
  token = JSON.parse(token)
  const store_token = authToken

  if(!token || !store_token) {
    return false
  }

  if(token.id !== store_token.id) {
    return false
  }

  if(tokenHasExpired(token)) {
    return false
  }

  if(token.id === store_token.id) {
    return true
  }

  return false
}

const PrivateRoute = ({ children, token, ...routeProps }) => {
  return (
    <Route {...routeProps} render={ ({ location }) => {
      return isAuthenticated(token) ? children 
      : <Redirect to={{
        pathname: '/login',
        state: { from: location }
      }} />

    } } />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  token: PropTypes.object
}

const mapStateToProps = state => ({
  token: state.token
})

export const ProtectedRoute = connect(mapStateToProps)(PrivateRoute)


export const tokenHasExpired = token => {
  if(token) {
    // compare the total seconds of the created time of the token
    // vs time to live (ttl) seconds
    const createdDate = new Date(token.createdDate)
    const created = Math.round(createdDate.getTime() / 1000)
    const ttl = 1209600
    const expiry = created + ttl

    if(created > expiry) return true
    return false
  }
  return false
}