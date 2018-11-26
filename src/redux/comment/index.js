const COMMENT_SET_STATE = '设置comment数据'
const initState = {
	data:[],
	pagination:{}
}
export default function(state = initState,action){
	switch(action.type){
		case COMMENT_SET_STATE:
			return {...state,...action.payload}
		default:
			return state
    }
}

export function $COMMENT_SET_STATE(data){
  return {type:COMMENT_SET_STATE,payload:data}
}