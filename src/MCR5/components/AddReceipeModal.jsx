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
import { ReceipeContext } from "../contexts/ReceipeContext";
import { ACTION_TYPES_RECEIPE } from "../reducer/ReceipeReducer";



  export default function AddReceipeModal(){


    const { state, dispatch, receipestate } = useContext(ReceipeContext)
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [receipeName, setReceipeName] = useState("")
    const [cuisineType, setCuisineType] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")    

    const onChangeHandler = (e) =>{
      setReceipeName(e.target.value)
    }

    const onChangeIngredients = (e) =>{
      setIngredients(e.target.value)
    }

    const onChnageCuisineType = (e) =>{
      setCuisineType(e.target.value)
    }

    const onChangeInstructions = (e) =>{
       setInstructions(e.target.value)
    }

    const addReceipeDetails = (receipeName, cuisineType, ingredients, instructions) =>{
          
     const ingredientsArray = ingredients.split(',')
      const receipeObj = {
              "id": receipestate.length+1, 
              "receipe": receipeName, 
              "type": cuisineType,
              "ingredients": ingredientsArray, 
              "instructions": instructions
          }
         dispatch({type: ACTION_TYPES_RECEIPE.ADD_RECEIPE, payload: receipeObj}) 
    }
    return(
        <div>
        <div className="habitcard" onClick={onOpen}>
               <p>Add Receipe</p>
             </div> 
       <Modal isOpen={isOpen} onClose={onClose}>
       <ModalOverlay>
         <ModalContent>
           <ModalHeader>New Receipe</ModalHeader>
           <ModalCloseButton />
     
           <ModalBody>
            <input type="text" value={receipeName} placeholder="Receipe Name" onChange={(e)=>{onChangeHandler(e)}}></input>
            <input type="text" value={cuisineType} placeholder="Cuisine Type" onChange={(e)=>{onChnageCuisineType(e)}}></input>
            <textarea column="6" row="10" value={ingredients} placeholder="Ingredients" onChange={(e)=>{onChangeIngredients(e)}}/>
            <textarea column="6" row="10" value={instructions} placeholder="Instructions" onChange={(e)=>{onChangeInstructions(e)}}/>
            <button onClick={()=>{addReceipeDetails(receipeName, cuisineType, ingredients, instructions)}}>Add Receipe Details</button>
           </ModalBody>

         <ModalFooter>

       </ModalFooter>
     </ModalContent>
     </ModalOverlay>
     </Modal>
</div>
    )
  }