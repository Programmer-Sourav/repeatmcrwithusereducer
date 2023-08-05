import { createContext, useEffect, useReducer } from "react";
import ReceipeReducer, { ACTION_TYPES_RECEIPE, initialState } from "../reducer/ReceipeReducer";

export const ReceipeContext = createContext()


export function ReceipeProvider({children}){

  const [state, dispatch] = useReducer(ReceipeReducer, initialState) 

  

   return(
       <ReceipeContext.Provider value={{}}>{children}</ReceipeContext.Provider>
   )
}