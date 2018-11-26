import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  store=>({
    post:store.post,
  }),{}
)

class App extends Component {
  render() {
    let title = ''
    try{
      title = this.props.post.data[0].attributes.title
    }catch(e){}
    return <div>{title}</div>
  }
}

export default App
