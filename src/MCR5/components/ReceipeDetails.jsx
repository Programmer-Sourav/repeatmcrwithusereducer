import "../../cardtwo.css"

import { ChakraProvider } from "@chakra-ui/react"
import EditReceipeModal from "./EditReceipeModal"
import { useContext } from "react"
import { ReceipeContext } from "../contexts/ReceipeContext"
import { ACTION_TYPES_RECEIPE } from "../reducer/ReceipeReducer"
import { Link } from "react-router-dom"

export default function ReceipeDetails({data}){

  const { receipestate, dispatch } = useContext(ReceipeContext)

    const deleteReceipe = (itemId) =>{
      dispatch({type: ACTION_TYPES_RECEIPE.DELETE_RCP , payload: itemId })
    }

  
    return(
      
      <div class="cardtwo">
      <Link to={`/receipe-details/${data.id}`}>
      <img
        src="https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?w=740&t=st=1691410222~exp=1691410822~hmac=416b0406bee0fe3cf1b42c689647e5d22518c6313caa935985806842f43d3e22"
        width = "292px"
        height= "220px"
        alt="download"
      />
      </Link>  
      <div class="cardtwo-details">
        <h2>{data.receipe}</h2>
        <p>{data.receipeType}</p>
        <p>{data.ingredients}</p>
        <p>{data.instructions}</p>
        <ChakraProvider>
        <EditReceipeModal data = {data}/>
       </ChakraProvider>
        <button style={{color: "red"}} onClick={()=>{deleteReceipe(data.id)}}> Delete</button>
      </div>
    </div>
        
    )
}