import { createContext, useReducer } from "react";
import ForumReducer, { initialState } from "../reducer/ForumReducer";
import { forumData } from "../data/api";

export const ForumContext = createContext()


export function ForumProvider({children}){

    const [state, dispatch ] = useReducer(ForumReducer, initialState)


    state.forum = forumData.posts

    return(
       <ForumContext.Provider value={{state, dispatch, forumstate: state.forum, filtered: state.forumData}}>{children}</ForumContext.Provider>
    )
}