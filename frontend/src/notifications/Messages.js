import PropTypes from 'prop-types'

const Messages = props => {
  const { messages } = props
  return (
    <div>
      <ul>
        {messages.map(mesg => (
          <li key={mesg.time}>{mesg.body}</li>
        ))}
      </ul>
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date
    })
  )
}

export default Messages