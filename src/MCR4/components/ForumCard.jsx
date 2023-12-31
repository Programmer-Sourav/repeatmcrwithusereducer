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

    const bookMark = (postId) =>{
     dispatch({type: ACTION_TYPES_FORUM.BOOKMARK, payload: postId})
    }

    return(
        <div class="cardthree">
        <div class="buttons">
          <button  onClick={()=>{upvotePost(data.postId)}}>Upvote</button>
          <p>{data.upvotes}</p>
          <button onClick={()=>{downvotePost(data.postId)}}>Downvote</button>
        </div>
        <div class="content">
          <h2>{data.post}</h2>
          { data.tags.map((tag)=>
          <button>{tag}</button>
          )}
          <p>{data.postDescription}</p>
          {data.isBookmarked ? <button style={{color: "red"}} onClick={()=>{bookMark(data.postId)}}>BookMark</button> : <button onClick={()=>{bookMark(data.postId)}}>BookMark</button> }
        </div>
        
      </div>
    )
}