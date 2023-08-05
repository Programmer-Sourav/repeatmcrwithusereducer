import { ChakraProvider } from "@chakra-ui/react"
import EditReceipeModal from "../components/EditReceipeModal"
import { useContext } from "react"
import { ReceipeContext } from "../contexts/ReceipeContext"
import { ACTION_TYPES_RECEIPE } from "../reducer/ReceipeReducer"

export default function ReceipeDetails({data}){

  const { receipestate, dispatch } = useContext(ReceipeContext)

    const deleteReceipe = (itemId) =>{
      dispatch({type: ACTION_TYPES_RECEIPE.DELETE_RCP , payload: itemId })
    }

    return(
        <div className="receipecard"> 
        <ul>
        <p>{data.receipe}</p>
        <p>{data.receipeType}</p>
        <p>{data.ingredients}</p>
        <p>{data.instructions}</p>
        </ul>
        <ChakraProvider>
        <EditReceipeModal data = {data}/>
       </ChakraProvider>
        <button onClick={()=>{deleteReceipe(data.id)}}> Delete</button>
        </div>
    )
}