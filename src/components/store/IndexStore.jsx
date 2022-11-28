import { type } from "@testing-library/user-event/dist/type"
import {createStore} from "redux"

const DEFAULT_STATE = {
    counter:7,
    name:"Rajesh",
    age:22
}

const reducerCounter = (state =DEFAULT_STATE,  action) =>{
if(action.type == "increment"){
    return {...state, counter:state.counter+1}
}
return state;
}



const store = createStore(reducerCounter)

export default store