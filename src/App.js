import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from './page/index'
import More from './page/more'
// import Bridge from './bridge'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Bridge/> */}
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/more' component={More}/>
        </Switch>
      </div>
    );
  }
}

export default App;
