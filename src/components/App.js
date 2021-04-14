import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="pageTitle">
            Math Magicians
          </div>
          <nav className="navbar">
            <ul className="navbarMenu">
              <li className="navbarItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navbarItem">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="navbarItem">
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
