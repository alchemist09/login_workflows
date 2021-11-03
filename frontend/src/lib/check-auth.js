import { setClient } from '../client/actions'

const checkAuthorization = dispatch => {
  const storedToken = localStorage.getItem('token')
  if(storedToken) {
    const token = JSON.parse(storedToken)
    // compare the total seconds of the created time of the token
    // vs time to live (ttl) seconds
    const createdDate = new Date(token.createdDate)
    const created = Math.round(createdDate.getTime() / 1000)
    const ttl = 1209600
    const expiry = created + ttl

    if(created > expiry) return false

    dispatch(setClient(token))
    return true
  }
  return false
}

export const checkWidgetAuthorization = ({ dispatch, getState }) => {
  return (nextState, replace, next) => {
    const client = getState().client
    console.log(client)
    if(client && client.token) return next()
    if(checkAuthorization(dispatch)) return next()
    replace('login')
    return next()
  }
}