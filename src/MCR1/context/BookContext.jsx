import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../data/api";
import BookReducer, { ACTION_TYPES_BOOKS, initialState } from "../reducer/BookReducer";


export const BookContext = createContext()


export function BookProvider({children}){

    const [state, dispatch] = useReducer(BookReducer, initialState)

    const categories = [{id:1, category: "read", title: "Read"}, 
                        {id:2, category: "Reading", title: "Currently Reading"}, 
                        {id:3, category: "want", title: "Want to Read"}]
    const getBooks = async() =>{
        try{
            const response = await fakeFetch("https://example.com/api/books")
            dispatch({type: ACTION_TYPES_BOOKS.INITIALIZE, payload: response.data.books})
        }
        catch(error){
         console.error(error)
        }
    }

    useEffect(()=>{getBooks()}, [])

    return(
        <BookContext.Provider value={{bookState: state.books, categories, state, dispatch, selectedState: state.selectedCategoryState, searchState: state.search}}>{children}</BookContext.Provider>
    )
}