import { useState } from "react"
import "../Q2A3/csstwo.css"


export default function GroceryList() {
 const [inputText, setInputText] = useState("")
 const [groceryList, updateGroceryList] = useState([])
 const [isChecked, setIsChecked] = useState([])

 const onChangeHandler = (e) =>{
   setInputText(e.target.value)
 }

 const onAddItem = (newItem) =>{
   const itemWithId = {id: groceryList.length, name: newItem, completed: false}
   updateGroceryList([...groceryList, itemWithId])
   setInputText("")
 }

 const onCheckboxChangeHandler = (e,  item) =>{
    updateGroceryList(groceryList.map((groceryItem)=>(groceryItem.id===item.id ? {...groceryItem, completed: !groceryItem.completed} : groceryItem)))
    if(e.target.checked){
        setIsChecked([...isChecked,item ])
    updateGroceryList(groceryList.filter((groceryItem)=>groceryItem.id!==item.id))
    }
 }


    return(
        <div>
            <h1>Grocery List</h1>

            <p>Add Item: <input type="text" className="textstyle" value={inputText} onChange={(e)=>{onChangeHandler(e)}}/>
            <button onClick={()=>{onAddItem(inputText)}}>Add</button>
            </p>
            <h1>Grocery List</h1>
            {
                groceryList.map((grocery)=>(
                    <li key={grocery.id}>
                     <input type="checkbox" checked={grocery.completed} onChange={(e)=>{onCheckboxChangeHandler(e, grocery)}}/> {grocery.name}
                    </li>
                ))
            }

            <h1>Completed List</h1>
            {
                isChecked.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))
            }
        </div>
    )
}