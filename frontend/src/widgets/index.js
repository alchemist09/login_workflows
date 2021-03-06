import { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { widgetCreate, widgetRequest } from './actions'
import Errors from '../notifications/Errors'
import Messages from '../notifications/Messages';
import PropTypes from 'prop-types'


const nameRequired = value => (value ? undefined : 'Name required')

class Widgets extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    widgets: PropTypes.shape({
      list: PropTypes.array,
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    }).isRequired,
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      token: PropTypes.shape({
        id: PropTypes.string.isRequired,
        ttl: PropTypes.number.isRequired,
        created: PropTypes.string.isRequired,
        userId: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    reset: PropTypes.func.isRequired,
    widgetCreate: PropTypes.func.isRequired,
    widgetRequest: PropTypes.func.isRequired
  }

  fetchWidgets = () => {
    const { client, widgetRequest } = this.props
    if(client && client.token) {
      return widgetRequest(client)
    }
    return false
  }

  renderNameInput = ({ input, type, meta: { error, touched }}) => (
    <div>
      <input {...input} type={type} />
      {touched && error && (
        <div style={{
          color: '#cc7a6f',
          margin: '-10px 0 15px',
          fontSize: '0.7rem'
        }}>
          {error}
        </div>
      )}
    </div>
  )

  submit = widget => {
    const { client, widgetCreate, reset } = this.props
    widgetCreate(client, widget)
    reset()
  }

  render() {
    // the 'invalid' prop is injected by Redux Form that states whether 
    // or not the form is valid/invalid. This is only relevant when we are
    // using the concept of validators on our form
    const {
      handleSubmit,
      invalid,
      widgets: {
        list,
        requesting,
        successful,
        messages,
        errors
      }
    } = this.props
    return (
      <div className="widgets">
        <h2>CREATE THE WIDGET</h2>
        <div className="widgets-form">
          <form onSubmit={handleSubmit(this.submit)}>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              type="text"
              id="name"
              className="name"
              component={this.renderNameInput}
              validate={nameRequired}
            />
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              type="text"
              id="description"
              className="description"
              component="input"
            />
            <label htmlFor="size">Size</label>
            <Field
              name="size"
              type="number"
              id="size"
              className="number"
              component="input"
            />
            <button disabled={invalid} action="submit">CREATE</button>
          </form>
          <hr />
          <div className="widget-messages">
            {requesting && <span>Creating widget....</span>}
            {!requesting && !!errors.length && <Errors message="Failure to create widget due to: " errors={errors} />}
            {!requesting && successful && !!messages.length && <Messages messages={messages} />}
          </div>
        </div>

        <div className="widget-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {
                list && !!list.length && list.map(
                  widget => (
                    <tr key={widget.id}>
                      <td>{widget.name}</td>
                      <td>{widget.description}</td>
                      <td>{widget.size}</td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
          <button onClick={this.fetchWidgets}>Refetch Widgets!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
  widgets: state.widgets
})

const connected = connect(mapStateToProps, { widgetCreate, widgetRequest })(Widgets)
const formed = reduxForm({
  form: 'widgets'
})(connected)

export default formed