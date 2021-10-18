import { setClient } from '../client/actions'

export const checkIndexAuthorization = ({ dispatch }) => {
  return (nextState, replace, next) => {
    if(checkAuthorization(dispatch)) {
      replace('widgets')
      next()
    }

    replace('login')
    next()
  }
}

const checkAuthorization = dispatch => {
  const storedToken = localStorage.getItem('token')
  if(storedToken) {
    const token = JSON.parse(storedToken)
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