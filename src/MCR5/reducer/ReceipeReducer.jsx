export const initialState = {
    receipes: []
}

export const ACTION_TYPES_RECEIPE = {
    ADD_RECEIPE : "ADD_RECEIPE",
    INITIALIZE: "INITIALIZE"
}

export default function ReceipeReducer(state, action){
    switch(action.type){
      case ACTION_TYPES_RECEIPE.ADD_RECEIPE: 
         return {...state}
      case ACTION_TYPES_RECEIPE.INITIALIZE: 
         return {}
      default: 
          return state   
    }
}