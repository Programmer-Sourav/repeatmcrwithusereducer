export const initialState = {
    snacks: [], 
    search: "", 
    searchedList: []

}


export const ACTION_TYPES_SNACKS = {
   SORT_BY_ID: "SORT_BY_ID", 
   SORT_BY_PRODUCT_NAME: "SORT_BY_PRODUCT_NAME", 
   SORT_BY_PRODUCT_WEIGHT: "SORT_BY_PRODUCT_WEIGHT", 
   SORT_BY_PRICE: "SORT_BY_PRICE", 
   SORT_BY_CALORIES: "SORT_BY_CALORIES", 
   SORT_BY_INGREDIENTS: "SORT_BY_INGREDIENTS", 
   SEARCH : "SEARCH"
}

export default function DataReducer(state, action) {
  switch(action.type){
    case ACTION_TYPES_SNACKS.SORT_BY_ID: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a, b)=>a.id > b.id ? 1 : -1)} : {...state, snacks: state.snacks.sort((a, b)=>a.id < b.id ? 1 : -1)}
    case ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_NAME: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a,b)=> a.product_name > b.product_name ? 1 : -1)} : {...state, snacks: state.snacks.sort((a,b)=> a.product_name < b.product_name ? 1 : -1)}
    case ACTION_TYPES_SNACKS.SORT_BY_PRODUCT_WEIGHT: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a,b)=> parseInt(a.product_weight) > parseInt(b.product_weight) ? 1 : -1)} : {...state, snacks: state.snacks.sort((a,b)=> parseInt(a.product_weight) < parseInt(b.product_weight) ? 1 : -1)}
    case ACTION_TYPES_SNACKS.SORT_BY_PRICE: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a,b)=> a.price > b.price ? 1 : -1)} : {...state, snacks: state.snacks.sort((a,b)=> a.price < b.price ? 1 : -1)}
    case ACTION_TYPES_SNACKS.SORT_BY_CALORIES: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a,b)=> a.calories > b.calories ? 1 : -1)} : {...state, snacks: state.snacks.sort((a,b)=> a.calories < b.calories ? 1 : -1)}
    case ACTION_TYPES_SNACKS.SORT_BY_INGREDIENTS: 
         return action.payload==="asc" ? {...state, snacks: state.snacks.sort((a,b)=> a.ingredients.sort((a, b) => a > b) > b.ingredients.sort((a, b) => a > b) ? 1 : -1).sort((a,b)=> a > b ? 1 : -1)} : {...state, snacks: state.snacks.sort((a,b)=> a.ingredients.sort((a,b)=>a<b)<b.ingredients.sort((a,b)=>a<b) ? 1 : -1)}    
    case ACTION_TYPES_SNACKS.SEARCH: 
         const filtered = state.snacks.filter((snack)=>(snack.product_name.toLowerCase().includes(action.payload.toLowerCase())))
         return{...state, search: action.payload, searchedList: [...filtered]}
    default: 
        return state                             
  }

}