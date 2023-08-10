import { useState } from "react"

export default function PracticeInput() {
const [inputValue, setInputValue] = useState("")
const [checkedState, setCheckedState] = useState(false)
const [buttonState, setButtonState] = useState(false)
const [selectState, setSelectState] = useState("")

   const onChangeHandler = (e) =>{
     setInputValue(e.target.value)
   }

   const onCheckChangeHandler = (e) =>{
     setCheckedState(e.target.checked)
   }

   const onButtonClicked = () =>{
    setButtonState(true)
   }

   const onSelectValueChange = (e) =>{
   setSelectState(e.target.value)
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
            <select value={selectState} onChange={(e)=>{onSelectValueChange(e)}}>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
            <p>Selected Option: {selectState}</p>
            </ul>
         }
         {checkedState? "Checked" : "Not Checked"}
        </div>
    )
}