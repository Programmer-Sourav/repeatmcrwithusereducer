import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import BookCard from "../component/BookCard"
import { Link } from "react-router-dom"

export default function Home(){

   const { bookState, categories, selectedState} = useContext(BookContext)



    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
             {
               categories.map((categoryData)=>( 
                <div>
                <h1>{categoryData.title}</h1>
              <ul>
              {bookState.filter((book)=>book.category===categoryData.category).map((book)=>(
               <li className="listitem"> <BookCard data={book}/> </li>
               ))}
               </ul>
               </div>  
                ))}
            
        </div>
    )
}