import { useContext } from "react"
import { BookContext } from "../context/BookContext"

export default function BookCard({data}){

   const { categories, state } = useContext(BookContext)


   const changeSelectedCategory = (e, bookId) =>{
    console.log(e, bookId)
   }

    return(
        <div>
            <img src={data.image} className="imageStyle" />
            <div>
                <p><strong>{data.title}</strong></p>
                <p>{data.author}</p>
                <select value = {state.selectedCategoryState} onChange={(e)=>{changeSelectedCategory(e, data.id)}}>
                    {categories.map((category)=>(
                        <option value={category.category}>{category.title}</option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}