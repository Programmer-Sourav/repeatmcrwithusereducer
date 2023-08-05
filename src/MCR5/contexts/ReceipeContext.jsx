import { createContext, useEffect, useReducer } from "react";
import ReceipeReducer, { ACTION_TYPES_RECEIPE, initialState } from "../reducer/ReceipeReducer";

export const ReceipeContext = createContext()


export function ReceipeProvider({children}){

  const [state, dispatch] = useReducer(ReceipeReducer, initialState) 

  
   console.log(123, state.receipes)
   return(
       <ReceipeContext.Provider value={{state, dispatch, receipestate: state.receipes}}>{children}</ReceipeContext.Provider>
   )
}