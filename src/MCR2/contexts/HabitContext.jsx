import { createContext, useReducer } from "react";
import DataReducer, { initialState } from "../reducer/DataReducer";

export const HabitContext = createContext()


export function HabitProvider({children}){

     const [state, dispatch ] = useReducer(DataReducer, initialState)

     console.log(123, state.habits)
     
    return(
        <HabitContext.Provider value={{state, dispatch, habitList: state.habits}}>{children}</HabitContext.Provider>
    )
}