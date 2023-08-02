import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { ACTION_TYPES_BOOKS } from "../reducer/BookReducer"

export default function BookCard({data}){

   const { categories, state, dispatch } = useContext(BookContext)


   const changeSelectedCategory = (e, bookId) =>{
    //console.log(123, bookId)
     dispatch({type: ACTION_TYPES_BOOKS.SELECT_CATEGORY, payload: {selectedValue: e.target.value, book_id: bookId}})
   }

    return(
        <div>
            <img src={data.image} className="imageStyle" />
            <div>
                <p><strong>{data.title}</strong></p>
                <p>{data.author}</p>
                <select value = {data.category} onChange={(e)=>{changeSelectedCategory(e, data.id)}}>
                    {categories.map((category)=>(
                        <option value={category.category}>{category.title}</option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}