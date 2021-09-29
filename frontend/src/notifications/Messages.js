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