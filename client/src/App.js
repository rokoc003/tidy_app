import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Household from '../src/pages/Household';
import Home from '../src/pages/Home';
import Overview from '../src/pages/Overview';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/household">
          <Household />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/list">
          <Overview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
