import { useState } from "react"

export default function AddRemoveInList(){
    const [reviews, setReviews] = useState([
        {id: 1, text: "Good!", rating: "4"},
        {id: 2, text: "Bad!", rating: "3.5"},
        {id: 3, text: "Awesome!", rating: "4.5"}
    ])

    const onAddClick = () =>{
        const newItem = {id:4, text: "Nice!", rating: "3.8"}
        setReviews([...reviews, newItem])
    }

    const onRemoveClick = (reviewId) =>{
     const result =  reviews.filter((reviewItem)=>reviewItem.id!==reviewId)
     setReviews(result)
    }

    return(
        <div>
          {
          <ul>
          <button onClick={()=>{onAddClick()}}>Add To List</button>
           
           {reviews.map((review)=>(
                <ul>
                <p>{review.id}----{review.text} --- {review.rating}</p>
                <button onClick={()=>{onRemoveClick(review.id)}}>Remove</button>
                </ul>
            ))}  
            </ul>
          }
          
        </div>
    )
}