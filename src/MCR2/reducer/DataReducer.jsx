export const initialState = {
    habits: [], 
    habitDetails: {},
    addHabit: "", 
    deleteHabit: "", 
    archiveHabit: "", 
    editHabit: ""
}

export const ACTION_TYPES_HABITS = {
    ADD_HABIT : "ADD_HABIT", 
    DELETE_HABIT: "DELETE_HABIT", 
    ARCHIVE_HABIT: "ARCHIVE_HABIT", 
    EDIT_HABIT: "EDIT_HABIT"
}

export default function DataReducer(state, action) {
    switch(action.type){
    case ACTION_TYPES_HABITS.ADD_HABIT: 
    console.log(444, action.payload)
         return {...state, habitDetails: action.payload, habits: [...state.habits, action.payload]}

    case ACTION_TYPES_HABITS.DELETE_HABIT: 
         return {...state}
         
    case ACTION_TYPES_HABITS.ARCHIVE_HABIT: 
          return {...state}  

    case ACTION_TYPES_HABITS.EDIT_HABIT: 
          return {...state}      
          
    default: 
    return state 
              
    }

}