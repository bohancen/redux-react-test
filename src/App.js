import React, { Component } from 'react';
import Article from './page/article'
import More from './page/more'
import { connect } from 'react-redux'

@connect(
  store=>({
    router:store.router,
  }),{}
)
class App extends Component {
  render() {
    switch(this.props.router.pathname){
      case 'article':
        return <Article />
      case 'reply':
        return <More />
      default:
        return null
    }
    
  }
}

export default App;
