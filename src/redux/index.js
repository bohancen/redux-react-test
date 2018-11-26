import { combineReducers } from 'redux'
import post from './post'
import comment from './comment'
import router from './router'


export default combineReducers({
  post,
  comment,
  router,
})

