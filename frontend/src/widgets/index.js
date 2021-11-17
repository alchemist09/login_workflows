import { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { widgetCreate } from './actions'


const nameRequired = value => (value ? undefined : 'Name required')

class Widgets extends Component {
  render() {
    return(
      <div>
        <h2>Widgets</h2>
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