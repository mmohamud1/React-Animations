import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
        </Switch>
      </Router>
    );
  }
}

export default App;
