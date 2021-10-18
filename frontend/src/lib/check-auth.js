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