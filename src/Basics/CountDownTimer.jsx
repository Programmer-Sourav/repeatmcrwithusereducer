import { useEffect, useState } from "react"

export default function CountDownTimer() {
    
    const [timerValue, setTimerValue] = useState(10)


    // useEffect(()=>{
      
    //     const interval = setInterval(()=>{
    //         if(timerValue>0){
    //         setTimerValue(timerValue-1)
    //         }
    //     }, 1000)

    //     return () => clearInterval(interval)
    // },[timerValue])

    // useEffect(()=>{
        
    //     const interval = setInterval(()=>{
     
    //           setTimerValue(prevTimerValue =>{
    //                if(prevTimerValue>0){
    //                 return prevTimerValue - 1
    //                }
    //                return prevTimerValue
    //           })
    //     },1000)
    //     return (()=>clearInterval(interval))
    // }, [])

    //with conditional 
    useEffect(()=>{
        
        const interval = setInterval(()=>{
     
              setTimerValue(prevTimerValue =>(prevTimerValue>0 ? prevTimerValue-1 : prevTimerValue))
        },1000)
        return (()=>clearInterval(interval))
    }, [])

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