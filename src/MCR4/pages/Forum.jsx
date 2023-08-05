import { useContext, useReducer } from "react"
import "../stylesheets/navigationleft.css"
import Navigation from "./Navigation"
import { ForumContext } from "../contexts/ForumContext"
import ForumCard from "../components/ForumCard"

export default function Forum(){

  const { forumstate, filtered } = useContext(ForumContext)

   //const dataToShow = filtered.length >0 ? filtered : forumstate

   console.log(2233, forumstate)

    return (
            <div>
                {
                 forumstate.map((forum)=>(
                    <ForumCard data = {forum} />
                 ))
                }
            </div>
    )
}