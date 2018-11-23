import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from './page/index'
import More from './page/more'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route path='/more' component={More}/>
      </Switch>
    );
  }
}

export default App;
