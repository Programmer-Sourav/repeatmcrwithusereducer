import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    border,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    PopoverFooter,
    background
  } from "@chakra-ui/react";
  import {  ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ACTION_TYPES_HABITS } from "../reducer/DataReducer";
import { HabitContext } from "../contexts/HabitContext";


  export default function AddHabitDetails(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [habitTitle, setHabitTitle] = useState("")
    const [habitGoal, setHabitGoal] = useState("1 Time Daily")
    const [habitFreq, setHabitFreq] = useState("Daily")
    const { state, dispatch } = useContext(HabitContext)
    

    const addHabitToList  = (habitTitle, habitGoal, habitFreq)  =>{
        dispatch({type:ACTION_TYPES_HABITS.ADD_HABIT,  payload: {title: habitTitle, goal: habitGoal, frequency: habitFreq}})
        setHabitTitle("")
    }

    
    return(
        <div>
        <div className="habitcard" onClick={onOpen}>
               <p>Create my own</p>
             </div> 
       <Modal isOpen={isOpen} onClose={onClose}>
       <ModalOverlay>
         <ModalContent>
           <ModalHeader>New Habit</ModalHeader>
           <ModalCloseButton />
     
           <ModalBody>
            <label>Habit Title: 
            <input type="text" placeholder="Title" value= {habitTitle} onChange={(e)=>{setHabitTitle(e.target.value)}}/>
            </label>
           <p> <label>Habit Goal: 
            <select value={habitGoal} onChange={(e)=>{setHabitGoal(e.target.value)}}>
                <option value="1 Time Daily">1 Time Daily</option>
                <option value="1 Time Weekly"> 1 Time Weekly</option>
            </select>
            </label> </p>
            <p>
            <label> Habit Frequency: 
            <select value={habitFreq} onChange={(e)=>{setHabitFreq(e.target.value)}}>
                <option value="Daily">Daily</option>
                <option value="Weekly"> Weekly</option>
            </select>
            </label>
            </p>
            <button className="buttonStyle" onClick={()=>addHabitToList(habitTitle, habitGoal, habitFreq)}>Add Habit</button>
           </ModalBody>

         <ModalFooter>

       </ModalFooter>
     </ModalContent>
     </ModalOverlay>
     </Modal>
</div>
    )
  }