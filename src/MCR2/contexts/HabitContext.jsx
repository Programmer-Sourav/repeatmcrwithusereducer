import { createContext } from "react";

export const HabitContext = createContext()


export function HabitProvider({children}){


    return(
        <HabitContext.Provider value={{}}>{children}</HabitContext.Provider>
    )
}