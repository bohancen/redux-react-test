import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  store=>({
    comment:store.comment,
  }),{}
)

class App extends Component {
  render() {
    let data = []
    try{
      data = this.props.comment.data
    }catch(e){}
    return <div>
      {data.map((item,index)=>{
        return <li key={item.attributes.id}>{item.attributes.content}</li>
      })}
    </div>
  }
}

export default App
