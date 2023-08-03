import { useContext } from "react"
import { HabitContext } from "../contexts/HabitContext"
import { ACTION_TYPES_HABITS } from "../reducer/DataReducer"
import { ChakraProvider } from "@chakra-ui/react"

export default function HabitCardView ({data}) {

  const { dispatch } = useContext(HabitContext)

    const deleteTheHabit = (itemId) =>{
      dispatch({type: ACTION_TYPES_HABITS.DELETE_HABIT, payload: itemId})
    }

    const archiveTheHabit = (itemdetails) =>{
      dispatch({type: ACTION_TYPES_HABITS.ARCHIVE_HABIT, payload: itemdetails})
    }

    const editTheHabit = (itemdetails) =>{
     <ChakraProvider>
        
     </ChakraProvider>
    }

    return(
        <div className="habitcardview">
         <p>Title: {data.title}</p>
         <p>Goal: {data.goal}</p>
         <p>Frequency: {data.frequency}</p>
         <button onClick={deleteTheHabit(data.id)}>Delete</button>
         <button onClick={archiveTheHabit(data)}>Archive</button>
         <button onClick={editTheHabit(data)}>Edit Habit</button>
        </div>
    )

}