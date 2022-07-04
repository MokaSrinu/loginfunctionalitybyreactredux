import {combineReducers,applyMiddleware} from "redux";
import {createStore} from "redux"
import { ProfileReducer } from "./reducers/profiledata";
import thunk from "redux-thunk";


const rootReducer=combineReducers({
    profiledata:ProfileReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log("state checking",store.getState());
})