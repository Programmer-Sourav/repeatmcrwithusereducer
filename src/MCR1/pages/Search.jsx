import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { ACTION_TYPES_BOOKS } from "../reducer/BookReducer"
import BookCard from "../component/BookCard"

export default function Search(){

  const { searchState, dispatch, bookState } = useContext(BookContext)

  const onChangeHandler = (e) =>{
      dispatch({type: ACTION_TYPES_BOOKS.SEARCH, payload: e.target.value})
  }

    return(
        <div>
        {
            <ul>
            <input type="search" value={searchState} placeholder="Search Books By Name" onChange={(e)=>{onChangeHandler(e)}}/>
            {
                searchState ? bookState.map((book)=>
                <BookCard data = {book}/>) : ""
            }
          </ul>
        }
        </div>
    )
}