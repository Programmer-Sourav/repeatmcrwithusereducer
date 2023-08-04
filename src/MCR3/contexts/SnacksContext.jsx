import { useAccordion } from "@chakra-ui/react";
import { createContext, useContext, useReducer } from "react";
import { snacks } from "../data/api";
import DataReducer, { initialState } from "../reducer/DataReducer";

export const SnacksContext = createContext()


export function SnacksProvider({children}){

    const [state, dispatch] = useReducer(DataReducer, initialState)

    state.snacks = snacks
   
    console.log(123, snacks)
    return(
        <SnacksContext.Provider value={{snacks: state.snacks, state, dispatch, searchState: state.search, searchedListState: state.searchedList}}>{children}</SnacksContext.Provider>
    )
}