import { useEffect, useState } from "react"
import { fakeFetch } from "./api"

export default function Chatwindow() {

  const [chatData, setChatData] = useState([])


  const getChatData = async() =>{
    console.log(444, "Inside")
    try{
     const response = await fakeFetch("https://example.com/api/userchats")
     console.log(555, response)
     setChatData(response.data)
    }
    catch(e){
     console.error(e)
    }
  }

  useEffect(()=>{getChatData()},[])

    return(
        <div> 
          {
            chatData.map((data, index)=>(
               <li key={index}>
                {index%2===0 ? "User" : "You"} : {data}
               </li>
            ))
          }
        </div>
    )
}