import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { AddressList } from './components'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AddressList} />
      </Switch>
    );
  }
}

export default App;
