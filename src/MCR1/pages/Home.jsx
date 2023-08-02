import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import BookCard from "../component/BookCard"

export default function Home(){

   const { bookState } = useContext(BookContext)

    return(
        <div>
            {
                bookState.map((book)=>(
                   <li className="listitem"> <BookCard data = {book}/> </li>
                ))
            }
            
        </div>
    )
}