import React from 'react';
import './App.css';
import Login from './pages/user/login'
import Index from './pages'
import Main from './pages/main/index'
import Test from './test/text'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact render={() => <Index />} />
      <Route path='/login' exact render={() => <Login />} />
      <Route path='/main' exact render={() => <Main />} />
      <Route path='/test' exact render={() => <Test />} />
      </Switch>
    </Router>
  );
}

export default App;
