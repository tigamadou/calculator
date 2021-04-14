import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import App from '../components/App';
import Quote from '../components/Quote';

export default function AppRouter() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/calculator">
            <App />
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
