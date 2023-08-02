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
            return {...state, books: state.books.map((book)=>book.id===action.payload.book_id ? {...book, category: action.payload.selectedValue} : book)}
        case ACTION_TYPES_BOOKS.SEARCH: 
           console.log(334, action.payload.toLowerCase())
            return {...state, books: state.books.filter((book)=>book.title.toLowerCase().includes(action.payload.toLowerCase()))}    
        case ACTION_TYPES_BOOKS.INITIALIZE:
            return {...state, books: action.payload}
        default: 
           return state        
     }
}