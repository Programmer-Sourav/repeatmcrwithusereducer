import { useContext } from "react"
import { SnacksContext } from "../contexts/SnacksContext"
import { ACTION_TYPES_SNACKS } from "../reducer/DataReducer"
import { ACTION_TYPES_HABITS } from "../../MCR2/reducer/DataReducer"

export default function SnacksIndex(){

    const { snacks, state, dispatch, searchState } = useContext(SnacksContext)


    const onChangeHandler = (e) =>{
      console.log(e.target.value)  
      dispatch({type: ACTION_TYPES_SNACKS.SEARCH, payload: searchState})
    }


    const sortByAsc = (sortVal) =>{
        //console.log(sortVal)
        if(sortVal==="id")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_ID, payload: "asc"})
        else if (sortVal==="name")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_NAME, payload: "asc"})
        else if(sortVal==="weight")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_WEIGHT, payload: "asc"})
        else if(sortVal==="price")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRICE, payload: "asc"})
        else if(sortVal==="calories")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_CALORIES, payload: "asc"})
        else if (sortVal==="ingredients")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_INGREDIENTS, payload: "asc"})
    }

    const sortByDsc = (sortVal) =>{
        if(sortVal==="id")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_ID, payload: "dsc"})
        else if (sortVal==="name")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_NAME, payload: "dsc"})
        else if(sortVal==="weight")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_WEIGHT, payload: "dsc"})
        else if(sortVal==="price")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_PRICE, payload: "dsc"})
        else if(sortVal==="calories")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_CALORIES, payload: "dsc"})
        else if (sortVal==="ingredients")
        dispatch({type: ACTION_TYPES_SNACKS.SORT_BY_INGREDIENTS, payload: "dsc"})
    }

    return(
        <div> 
            <h1>Snacks Table</h1>
            {
                <div>
                <input type="search" value={searchState} placeholder="Search with name and ingredients" onChange={(e)=>{onChangeHandler(e)}}/>
               <table>
                <tr>
                    <th className="headerstyle">
                      <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("id")}}>Dsc</button>  ID <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("id")}}>Asc</button>
                    </th>
                    <th className="headerstyle">
                    <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("name")}}>Dsc</button>  Product Name <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("name")}}>Asc</button>
                    </th>
                    <th className="headerstyle">
                    <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("weight")}}>Dsc</button>  Product Weight <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("weight")}}>Asc</button>
                    </th>
                    <th className="headerstyle">
                    <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("price")}}>Dsc</button>  Price(INR) <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("price")}}>Asc</button>
                    </th>
                    <th className="headerstyle">
                    <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("calories")}}>Dsc</button>  Calories <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("calories")}}>Asc</button>
                    </th>
                    <th className="headerstyle">
                    <button style={{backgroundColor: "red"}} onClick={()=>{sortByDsc("ingredients")}}>Dsc</button>  Ingredients <button style={{backgroundColor: "green"}} onClick={()=>{sortByAsc("ingredients")}}>Asc</button>
                    </th>
                    </tr>
                    { snacks.map((snack)=>(
                    <tr>
                    <td>
                     {snack.id}
                    </td>
                    
                    <td>
                    {snack.product_name}
                    </td>
                   
                    <td>
                    {snack.product_weight}
                    </td>
                    
                    <td>
                    {snack.price}
                    </td>
                    
                    <td>
                    {snack.calories}
                    </td>
                    
                    <td>
                    {snack.ingredients.map((ingredient, index)=>ingredient+", ")}
                    </td>
                    </tr>
                  ))}
               </table>
               </div>
            }
        </div>
    
    )
    
}