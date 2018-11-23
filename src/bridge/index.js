// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// import {
//   $POST_SET_STATE,
//   $POST_EVENT_OPEN,
//   $POST_EVENT_CLOSE,
//   $POST_EVENT_TOGGLE,
// } from '../redux/post'

// @connect(
//   store=>({}),
//   {
//     $POST_SET_STATE,
//     $POST_EVENT_OPEN,
//     $POST_EVENT_CLOSE,
//     $POST_EVENT_TOGGLE,
//   }
// )

// class Bridge extends Component {
//   constructor(props){
//     super(props)
//     window.POST_EVENT_TOGGLE = props.$POST_EVENT_TOGGLE
//     window.POST_SET_STATE = props.$POST_SET_STATE
//   }
//   render() {
//     return null
//   }
// }
// export default Bridge

import {
  $POST_SET_STATE,
  $POST_EVENT_OPEN,
  $POST_EVENT_CLOSE,
  $POST_EVENT_TOGGLE,
} from '../redux/post'

export default (store)=>{
  window.toggle = ()=>{
    store.dispatch($POST_EVENT_TOGGLE())
  }
  window.setdata = (data)=>{
    store.dispatch($POST_SET_STATE(data))   
  }
}
