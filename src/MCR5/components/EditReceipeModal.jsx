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



  export default function EditReceipeModal({data}){


    const { state, dispatch } = useContext(ReceipeContext)
    
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [receipeName, setReceipeName] = useState(data.receipe)
    const [cuisineType, setCuisineType] = useState(data.type)
    const [ingredients, setIngredients] = useState(data.ingredients)
    const [instructions, setInstructions] = useState(data.instructions)    

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

    const editReceipeDetails = (itemId, receipeName, cuisineType, ingredients, instructions) =>{
          const receipeObj = {
              "id" : itemId, 
              "receipe": receipeName, 
              "type": cuisineType,
              "ingredients": ingredients, 
              "instructions": instructions
          }
         dispatch({type: ACTION_TYPES_RECEIPE.EDIT_RCP, payload: receipeObj}) 
    }
    return(
        <div>
        <button onClick={onOpen}>
               Edit Receipe
             </button> 
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
            <button onClick={()=>{editReceipeDetails(data.id, receipeName, cuisineType, ingredients, instructions)}}>Add Receipe Details</button>
           </ModalBody>

         <ModalFooter>

       </ModalFooter>
     </ModalContent>
     </ModalOverlay>
     </Modal>
</div>
    )
  }