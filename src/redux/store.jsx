import {applyMiddleware, createStore} from 'redux'
import {Reducer} from "./reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))