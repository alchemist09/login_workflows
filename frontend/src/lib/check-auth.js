import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const isAuthenticated = store => {
  let token = localStorage.getItem("token")
  token = JSON.parse(token)
  const store_token = store.getState().client.token

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

export const ProtectedRoute = ({ auth, component, ...routeProps }) => {
  return (
    <Route {...routeProps} component={component}>
      { auth ? component : <Redirect to="/login" />}
    </Route>
  )
}

ProtectedRoute.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.elementType
}


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