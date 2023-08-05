import { useContext, useReducer } from "react"
import "../stylesheets/navigationleft.css"
import Navigation from "./Navigation"
import { ForumContext } from "../contexts/ForumContext"
import ForumCard from "../components/ForumCard"
import { Button } from "@chakra-ui/react"
import { ACTION_TYPES_FORUM } from "../reducer/ForumReducer"

export default function Forum(){

  const { forumstate, filtered, dispatch } = useContext(ForumContext)

  const sortTrending = () =>{
    dispatch({type: ACTION_TYPES_FORUM.SORT_TRENDING})
  }

  const sortLatest = () =>{
   dispatch({type: ACTION_TYPES_FORUM.SORT_LATEST})
  }

    return (
            <div>
                {
                 <ul> 
                 <button onClick={()=>{sortTrending()}}>Trending</button>   
                 <button onClick={()=>{sortLatest()}}>Latest</button>
                 {forumstate.map((forum)=>(
                    <ForumCard data = {forum} />
                 ))
                }
                </ul>
                }
            </div>
    )
}