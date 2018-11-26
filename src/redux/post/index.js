const POST_SET_STATE = '设置post数据'
const initState = {
  data:[{
		attributes:{}
	}]
}
export default function(state = initState,action){
	switch(action.type){
		case POST_SET_STATE:
			return {...state,...action.payload}
		default:
			return state
    }
}


export function $POST_SET_STATE(data={}){
    return {type:POST_SET_STATE,payload:data}
}

