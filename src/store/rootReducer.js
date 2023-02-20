import { combineReducers } from "redux";
import { categoryApi } from "../features/cartSlice";
import cartReducer from "./reducers/cartReducer"

const rootReducer = combineReducers({
    cart : cartReducer,
})

export default rootReducer;