import { useState } from "react";

export default function Checkboxpractice(){

    const notes = [
        { text: 'Buy Medicines', priority: 'High' },
        { text: 'Go to walk', priority: 'Low' },
        { text: 'Read something', priority: 'High'}
      ];

    const [notesList, setNotesList] = useState(notes) 
    const [checkedState, setCheckedstate] = useState([])  

    const onPriorityChange = (priorityVal) =>{
        //if checkedState [] already contains the selected priority
       if(checkedState.includes(priorityVal)){
         setCheckedstate(checkedState.filter((value)=>value!==priorityVal))
       }
       else{
        //if not exists, add it to the []
        setCheckedstate([...checkedState, priorityVal])
       }
    }


   let filteredNotes = notesList
   
   if(checkedState.length>0)
   filteredNotes = notesList.filter((note)=>checkedState.includes(note.priority))
   console.log(456, filteredNotes, checkedState)
    return(
        <div> 
            <h1>Checkbox</h1>
            <label>
            <input type="checkbox" checked={checkedState.includes('Low')} onChange={()=>{onPriorityChange("Low")}}/>
            Low Priority
            </label>
            <label>
            <input type="checkbox" checked={checkedState.includes("High")} onChange={()=>{onPriorityChange("High")}}/>
            High Priority
            </label>
       
       { 
       filteredNotes.map((note, index)=>(
        <li key={index}>
        <p>{note.text}</p>
        <p>Priority: {note.priority}</p>
        </li>
       ))
       
       }
         
            
        </div>
    )
}