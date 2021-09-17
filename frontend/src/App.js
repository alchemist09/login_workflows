import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Widget Reactory</h2>
      </header>
      <section className="App-body">
        {props.children}
      </section>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
