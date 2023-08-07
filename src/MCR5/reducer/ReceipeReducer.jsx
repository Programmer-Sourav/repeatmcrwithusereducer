export const initialState = {
    receipes: []
}

export const ACTION_TYPES_RECEIPE = {
    ADD_RECEIPE : "ADD_RECEIPE",
    INITIALIZE: "INITIALIZE", 
    DELETE_RCP: "DELETE", 
    EDIT_RCP : "EDIT"
}

export default function ReceipeReducer(state, action){
    switch(action.type){
      case ACTION_TYPES_RECEIPE.ADD_RECEIPE: 
         return {...state, receipes : [...state.receipes, action.payload]}
      case ACTION_TYPES_RECEIPE.EDIT_RCP: 
      console.log(234, action.payload.id)
         return {...state, receipes: state.receipes.map((receipe)=>(receipe.id===action.payload.id ? {...receipe, receipe: action.payload.receipe, type: action.payload.type, ingredients: action.payload.ingredients, instructions: action.payload.instructions } : receipe))}
      case ACTION_TYPES_RECEIPE.DELETE_RCP: 
         return{...state, receipes: state.receipes.filter((receipe)=>receipe.id!== action.payload) }      
      default: 
          return state   
    }
}