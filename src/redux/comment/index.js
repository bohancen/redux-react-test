const POST_SET_STATE = '设置post数据'
const POST_EVENT_OPEN = '打开'
const POST_EVENT_CLOSE = '关闭'
const POST_EVENT_TOGGLE = '打开/关闭'
const initState = {
  open:false
}
export default function(state = initState,action){
    switch(action.type){
        case POST_SET_STATE:
            return {...state,...action.payload}
        case POST_EVENT_OPEN:
            return {...state,open:true}
        case POST_EVENT_CLOSE:
            return {...state,open:false}
        case POST_EVENT_TOGGLE:
            return {...state,open:!state.open}
        default:
            return state
    }
}

export function $POST_EVENT_OPEN(){
  return {type:POST_EVENT_OPEN}
}
export function POST_EVENT_CLOSE_ACTION(){
  return {type:POST_EVENT_CLOSE}
}
export function POST_EVENT_TOGGLE_ACTION(){
  return {type:POST_EVENT_TOGGLE}
}

export function POST_SET_STATE_ACTION(){
    return dispatch=>{
        setTimeout(function(){
            let data = {title:'limeiling'}
            dispatch({type:POST_SET_STATE,payload:data})
        },2000)
    }
}

