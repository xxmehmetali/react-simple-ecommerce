import { configureStore } from '@reduxjs/toolkit';
import {legacy_createStore} from 'redux'
import { devToolsEnhancer } from "redux-devtools-extension";
//Or you can use an alias so that your code remains the same.
import rootReducer from "./rootReducer";

// export function configureStorex() {
//     //return legacy_createStore(rootReducer, devToolsEnhancer())
//     return configureStore(
//         { 
//             reducer: { 
//                 rootReducer,
//                 [categoryApi.reducerPath]: categoryApi.reducer,
//             }, 
//             middleware: (getDefaultMiddleware) => 
//               getDefaultMiddleware().concat(categoryApi.middleware), 
//           }
//     )
// }