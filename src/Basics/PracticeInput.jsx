import { useState } from "react"

export default function PracticeInput() {
const [inputValue, setInputValue] = useState("")
const [checkedState, setCheckedState] = useState(false)
const [buttonState, setButtonState] = useState(false)

   const onChangeHandler = (e) =>{
     setInputValue(e.target.value)
   }

   const onCheckChangeHandler = (e) =>{
     setCheckedState(e.target.checked)
   }

   const onButtonClicked = () =>{
    setButtonState(true)
   }

    return (
        <div>
         {
            <ul>
            <input type="text" placeholder="Input a Text" value={inputValue} onChange={(e)=>{onChangeHandler(e)}}/>
            <h1>Checkbox in React</h1>
            <label>
            <input type="checkbox" checked={checkedState} onChange={(e)=>{onCheckChangeHandler(e)}}/> select
            </label>
            <button onClick={()=>{onButtonClicked()}}>{buttonState ? "Clicked!" : "Clike Me!"}</button>
            </ul>
         }
         {checkedState? "Checked" : "Not Checked"}
        </div>
    )
}