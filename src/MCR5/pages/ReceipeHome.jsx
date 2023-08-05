import { ChakraProvider } from "@chakra-ui/react";
import AddReceipeModal from "../components/AddReceipeModal";
import { useContext } from "react";
import { ReceipeContext } from "../contexts/ReceipeContext";
import ReceipeDetails from "./ReceipeDetails";

export default function ReceipeHome(){

    const { dispatch, receipestate} = useContext(ReceipeContext)

    return(
        <div>
            {
                <ul>
                <ChakraProvider>
                    <AddReceipeModal/>
                </ChakraProvider>
                {
                    receipestate.map((receipe)=>(
                        <ReceipeDetails data = {receipe}/>
                    )
                    )
                }
                </ul>
            }
        </div>
    )
}