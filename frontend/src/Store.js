import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productsReducer, productDetailsReducer } from "./reducer/productReducer";
// import { FcMiddleBattery } from "react-icons/fc";


const reducer = combineReducers({
    products:productsReducer,
    productDetais:productDetailsReducer 
 
   
    

});

let initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store