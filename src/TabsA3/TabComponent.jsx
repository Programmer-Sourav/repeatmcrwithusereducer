import { useEffect, useReducer } from "react"
import Reducer, { ACTION_TYPES, initialState } from "./Reducer"

export default function TabComponent(){
   
  const [state, dispatch] = useReducer(Reducer, initialState)

  const data = [{id:1, text: "Tab1", content: "Content1"},
   {id:2, text: "Tab2", content: "Content2"},
   {id:3, text: "Tab3", content: "Content3"}]

   useEffect(() => {
    dispatch({ type: ACTION_TYPES.INITIALIZE, payload: data });
    dispatch({type: ACTION_TYPES.CURRENT_TAB, payload: data[0].id})
  }, []);

   const handleEachTab = (tabId) =>{
    dispatch({type: ACTION_TYPES.CURRENT_TAB, payload: tabId})
   }
    return(
        <div> 
         {state.data.map((eachTab)=>(
            <button style={{color: eachTab.id===state.currentTab ? "red" : ""}} onClick={()=>{handleEachTab(eachTab.id)}}>{eachTab.text}</button>
         ))}
         {
            state.data.map((eachTab)=>(
                state.currentTab === eachTab.id && <p key={eachTab.id}>{eachTab.content}</p>
            ))
         }
        </div>
    )
}