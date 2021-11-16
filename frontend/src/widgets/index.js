import { Component } from 'react';
import { connect } from 'react-redux'
import { widgetCreate } from './actions'

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

export default connect(mapStateToProps, { widgetCreate })(Widgets)