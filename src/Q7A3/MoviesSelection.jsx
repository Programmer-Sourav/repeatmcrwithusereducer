import { useEffect, useState } from "react"
import { fakeFetch } from "../Q5A3/api"

export default function MovieSelection(){

    const [radioSelectedState, setRadioSelectedState] = useState("All")
    const [selectRatingState, setSelectRatingState] = useState("All")
    const [movies, setMovies] = useState([])


    const getMoviesData = async() =>{
        try{
        const response = await fakeFetch("https://example.com/api/movies")
        setMovies(response.data)
        }
        catch(e){
         console.error(e)
        }
    }
   

    useEffect(()=>{getMoviesData()}, [])


    const onChangeHandler = (value) =>{
          setRadioSelectedState(value)
          console.log(value)
    }

    const handleRatingChange = (value) =>{
         setSelectRatingState(value)
    }
    return(
        <div> 
            <p>Category Filter:
                <label>
                <input type="radio" checked={radioSelectedState==="All"} onChange={()=>{onChangeHandler("All")}}/> All
                </label> 
                <label>
                <input type="radio" checked={radioSelectedState==="Action"} onChange={()=>{onChangeHandler("Action")}}/> Action
                </label> 
                <label>
                <input type="radio" checked={radioSelectedState==="Crime"} onChange={()=>{onChangeHandler("Crime")}}/> Crime
                </label> 
                <label>
                <input type="radio" checked={radioSelectedState==="Drama"} onChange={()=>{onChangeHandler("Drama")}}/> Drama
                </label> 
                <h2>Rating Filter: </h2>
                <select value={selectRatingState} onChange={()=>{handleRatingChange()}}>
                <option value="All">All</option>
                <option value="8.5">8.5+</option>
                <option value="9.0">9.0+</option>
                <option value="8.0">8.0+</option>
                <option value="7.5">7.5+</option>
          </select>
            </p>
            <h1>Movies List</h1>
            {
             movies.map((movie)=>(
                <li key = {movie.id}>
                    <h1>{movie.title}</h1>
                    <p>Rating: {movie.rating}</p>
                    <p>Year: {movie.year}</p>
                </li>
             ))
            }
        </div>
    )
}