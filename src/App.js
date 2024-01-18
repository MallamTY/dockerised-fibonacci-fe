import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import subPage from './SubPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home Page</Link>
          <Link to="/subPage"></Link>
        </header>
        <div>
          <Route exact path='/' component = {Fib}></Route>
          <Route exact path="/subPage" component = {subPage}></Route>
        </div>
    </div>
    </Router>
  );
}

export default App;
