import {$POST_SET_STATE} from '../redux/post'
import {$COMMENT_SET_STATE} from '../redux/comment'
import {$ROUTER_SET_STATE} from '../redux/router'

export default (store)=>{
  window.setdata = (data)=>{
    store.dispatch($POST_SET_STATE(data))
  }
  window.setrouter = (data)=>{
    store.dispatch($ROUTER_SET_STATE(data))
  }
  if(window.location.search=='?devapp'){
    devtool(store)
  }
}

function devtool(store){
  import('../test').then(({post,comment})=>{
    if(typeof post == 'string'){
      post = JSON.parse(post)
    }
    if(typeof comment == 'string'){
      comment = JSON.parse(comment)
    }
    store.dispatch($POST_SET_STATE(post))
    store.dispatch($COMMENT_SET_STATE(comment))
  })
}