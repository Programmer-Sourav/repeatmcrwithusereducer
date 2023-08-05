import { createContext, useEffect, useReducer } from "react";
import ForumReducer, { ACTION_TYPES_FORUM, initialState } from "../reducer/ForumReducer";
import { forumData } from "../data/api";

export const ForumContext = createContext()


export function ForumProvider({children}){

    const [state, dispatch ] = useReducer(ForumReducer, initialState)

    useEffect(() => {
        dispatch({ type: ACTION_TYPES_FORUM.INITIALIZE, payload: forumData.posts });
      }, []);

   
    return(
       <ForumContext.Provider value={{state, dispatch, forumstate: state.forum, filtered: state.forumData}}>{children}</ForumContext.Provider>
    )
}