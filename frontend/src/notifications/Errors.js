import PropTypes from 'prop-types'

const Errors = props => {
  const { errors } = props

  return (
    <div>
      <ul>
        {errors.map(e => (
          <li key={e.time}>{e.body}</li>
        ))}
      </ul>
    </div>
  )
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date
    })
  )
} 

export default Errors;