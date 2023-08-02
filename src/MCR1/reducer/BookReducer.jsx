export const initialState = {
    books: [], 
    selectedCategoryState: ""
}

export const ACTION_TYPES_BOOKS = {
    SELECT_CATEGORY : "SELECT_CATEGORY", 
    SEARCH: "SEARCH", 
    INITIALIZE: "INITIALIZE"
}

export default function BookReducer(state, action){
     switch(action.type){
        case ACTION_TYPES_BOOKS.SELECT_CATEGORY :
            return {...state}
        case ACTION_TYPES_BOOKS.SEARCH: 
            return {...state}    
        case ACTION_TYPES_BOOKS.INITIALIZE:
            return {...state, books: action.payload}
        default: 
           return state        
     }
}