import { ChakraProvider } from "@chakra-ui/react";
import AddHabitDetails from "../component/Modal";
import { useContext } from "react";
import { HabitContext } from "../contexts/HabitContext";
import HabitCardView from "../component/HabitCardView";

export default function HabitMain(){

  const { habitList } = useContext(HabitContext)

    return(
        <div>
            <ChakraProvider>
            <AddHabitDetails/>
            </ChakraProvider>
            {
                habitList.map((habit)=>(
                    <HabitCardView data={habit}/>
                ))
            }
        </div>
    )
}