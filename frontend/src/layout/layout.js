import PropTypes from 'prop-types'
import logo from '../logo.svg';
import '../App.css';

const Layout = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Widget Factory</h2>
      </header>
      <section className="App-body">
        {props.children}
      </section>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}


export default Layout