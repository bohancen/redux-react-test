const ROUTER_SET_STATE = '设置router数据'
const initState = {
  // article comment 
  pathname:'article'
}
export default function(state = initState,action){
  switch(action.type){
    case ROUTER_SET_STATE:
      return {...state,...action.payload}
    default:
      return state
  }
}

export function $ROUTER_SET_STATE(string){
  return {type:ROUTER_SET_STATE,payload:string}
}


