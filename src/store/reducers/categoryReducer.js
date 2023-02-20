import { categoryNames } from "../initialValues/categoryNames";

const initialState = {
    categoryNames : categoryNames
}

export default function categoryReducer(state = initialState, {type, payload}) {
    switch (type) {
        
        default:
            return state;
    }
}