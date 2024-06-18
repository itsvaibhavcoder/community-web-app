// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
