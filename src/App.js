import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  $POST_SET_STATE,
  $POST_EVENT_OPEN,
  $POST_EVENT_CLOSE,
  $POST_EVENT_TOGGLE,
} from './redux/post'

@connect(
  store=>({
    post:store.post,
    comment:store.comment
  }),
  {
    $POST_SET_STATE,
    $POST_EVENT_OPEN,
    $POST_EVENT_CLOSE,
    $POST_EVENT_TOGGLE,
  }
)

class App extends Component {
  componentDidMount(){
    this.props.$POST_SET_STATE()
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.comment.title}
        </div>
        <div>
          {this.props.post.title}
        </div>
        {
          this.props.post.open ? 'open' : 'close'
        }
        <div>
          <button onClick={this.props.$POST_EVENT_OPEN}>open</button>
          <button onClick={this.props.$POST_EVENT_CLOSE}>close</button>
          <button onClick={this.props.$POST_EVENT_TOGGLE}>toggle</button>
        </div>
      </div>
    );
  }
}

export default App;
