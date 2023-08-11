import { useEffect, useState } from "react"
import { fakeFetch } from "./api"

export default function TweetScreen(){

   const [tweets, setTweets] = useState([])
   const [showTweetsFlag, setShowTweetsFlag] = useState(false)

   const getTweets = async() =>{
    try{
     const response = await fakeFetch("https://example.com/api/usertweets")
     setTweets(response.data)
    }
    catch(e){
      console.error(e)
    }
   }

   useEffect(()=>{getTweets()},[])


   const showTweets = () =>{
      setShowTweetsFlag(!showTweetsFlag)
   }

   const filteredTweets = showTweetsFlag ? tweets.filter((tweet)=>(tweet.likes>50)) : tweets

    return(
        <div> 
            <button onClick={()=>{showTweets()}}>{showTweetsFlag ? "Show All Tweets" :  "Show Tweets with more than 50 Likes" }</button>
            {
                filteredTweets.map((tweet)=>(
                    <li key = {tweet.id}>
                        <h2>{tweet.content}</h2>
                        <p>Likes: {tweet.likes}</p>
                        <p>Views: {tweet.views}</p>
                     </li>
                ))
            }

        </div>
    )
}