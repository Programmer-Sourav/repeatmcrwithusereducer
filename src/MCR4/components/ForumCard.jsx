import "../stylesheets/forumcard.css"

import { useContext } from "react"
import { ForumContext } from "../contexts/ForumContext"
import { ACTION_TYPES_FORUM } from "../reducer/ForumReducer"

export default function ForumCard({data}){
  
    const { state,  dispatch } = useContext(ForumContext) 


    const upvotePost = (postId) =>{
      dispatch({type: ACTION_TYPES_FORUM.UPVOTES, payload:postId })
    }

    const downvotePost = (postId) =>{
      dispatch({type: ACTION_TYPES_FORUM.DOWNVOTES, payload: postId })
    }

    return(
        <div class="cardthree">
        <div class="buttons">
          <button  onClick={()=>{upvotePost(data.postId)}}>Upvote</button>
          <button>{data.upvotes}</button>
          <button onClick={()=>{downvotePost(data.postId)}}>Downvote</button>
        </div>
        <div class="content">
          <h2>{data.post}</h2>
          { data.tags.map((tag)=>
          <button>{tag}</button>
          )}
          <p>{data.postDescription}</p>
        </div>
      </div>
    )
}