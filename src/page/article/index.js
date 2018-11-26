import React, { Component } from 'react';
import Post from './post'
import Comment from './comment'

export default class extends Component {
  render() {
    return <React.Fragment>
      <Post />
      <Comment />
    </React.Fragment>
  }
}
