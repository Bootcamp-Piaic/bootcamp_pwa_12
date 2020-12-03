import React from 'react';
import {Link,Route ,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Users from './Users';
import About from './About';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home   </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Route component={Home} path='/'></Route>
        <Route component={Users} path='/users'></Route>
        <Route component={About} path='/about'></Route>
      </Router>
    </div>
  );
}

