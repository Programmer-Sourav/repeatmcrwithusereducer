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

           </ModalBody>

         <ModalFooter>

       </ModalFooter>
     </ModalContent>
     </ModalOverlay>
     </Modal>
</div>
    )
  }