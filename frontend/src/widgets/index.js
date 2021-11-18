import { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { widgetCreate } from './actions'


const nameRequired = value => (value ? undefined : 'Name required')

class Widgets extends Component {
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
    return(
      <div className="widgets">
        <h2>CREATE THE WIDGET</h2>
        <div className="widgets-form">
          <form>
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.client,
  widgets: state.widgets
})

const connected = connect(mapStateToProps, { widgetCreate })(Widgets)
const formed = reduxForm({
  form: 'widgets'
})(connected)

export default formed