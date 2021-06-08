import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Messaging from './components/Messaging';
import Network from './components/Network';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/messages">
            <Messaging />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/network">
            <Network />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
