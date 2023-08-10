import { useEffect, useState } from "react"

export default function CountDownTimer2 () {

   const [dateTime, setDateTime] = useState(new Date())


   useEffect(()=>{
                  
   const interval =  setInterval(()=>{
        setDateTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
}, [])

    return(
        <div>
            
                <ul>
                <h2>
                    Updaing Date Time
                </h2>

                 {dateTime.toString()}
                </ul>
            
        </div>
    )
}