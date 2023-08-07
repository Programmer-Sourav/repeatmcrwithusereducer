import { useContext } from "react"
import { ReceipeContext } from "./ReceipeContext"
import { useParams } from "react-router"

export default function ReceipeDisplay(){

     const { receipestate } = useContext(ReceipeContext)
     const { id } = useParams()
     

     const findReceipe = getReceipeDetails()
  
     function getReceipeDetails(){
      return receipestate.find((receipeItem)=>receipeItem.id.toString()===id)
      }

    return(
        <ul>
        <h1>{findReceipe.receipe}</h1>
        <div class="cardthree">
        <div class="image">
        <img
        src="https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?w=740&t=st=1691410222~exp=1691410822~hmac=416b0406bee0fe3cf1b42c689647e5d22518c6313caa935985806842f43d3e22"
        width = "320px"
        height= "512px"
        alt="download"
      />
        </div>
        <div class="content">
          <h3>Cuisine: {findReceipe.type}</h3>
          <p>Ingredients: {findReceipe.ingredients}</p>
          <p>Instructions: {findReceipe.instructions}</p>
        </div>
      </div>
      </ul>
    )
}