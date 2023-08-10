import { useEffect, useState } from "react"

export default function CountDownTimer() {
    
    const [timerValue, setTimerValue] = useState(10)


    useEffect(()=>{
      
        const interval = setInterval(()=>{
            if(timerValue>0){
            setTimerValue(timerValue-1)
            }
        }, 1000)

        return () => clearInterval(interval)
    },[timerValue])

    return(
        <div> 
            {
            <ul>
             <h1>Countdown Timer: </h1>
             <p> Seconds: {timerValue}</p>
            </ul>
            }
        </div>
    )
}