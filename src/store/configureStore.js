import {legacy_createStore} from 'redux'
import { devToolsEnhancer } from "redux-devtools-extension";
//Or you can use an alias so that your code remains the same.
import rootReducer from "./rootReducer";

export function configureStore() {
    return legacy_createStore(rootReducer, devToolsEnhancer())
}