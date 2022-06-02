import { combineReducers } from "redux";
import productReducer from "../Product/Reducer";
import cartReducer from "./cart/reducer";
const rootReducer = combineReducers({
    product : productReducer,
    shopping : cartReducer
})
export default rootReducer;