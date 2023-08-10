import { useState } from "react"

export default function PracticeInput() {
const [inputValue, setInputValue] = useState("")

   const onChangeHandler = (e) =>{
     setInputValue(e.target.value)
   }


    return (
        <div>
         {
            <input type="text" placeholder="Input a Text" value={inputValue} onChange={(e)=>{onChangeHandler(e)}}/>
         }
        </div>
    )
}