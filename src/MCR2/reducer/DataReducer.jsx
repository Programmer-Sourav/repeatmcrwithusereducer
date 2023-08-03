export const initialState = {
    habits: [], 
    addHabit: "", 
    deleteHabit: "", 
    archiveHabit: ""
}

export const ACTION_TYPES_HABITS = {
    ADD_HABIT : "ADD_HABIT", 
    DELETE_HABIT: "DELETE_HABIT", 
    ARCHIVE_HABIT: "ARCHIVE_HABIT"
}

export default function DataReducer(state, action) {
    switch(action.type){
    case ACTION_TYPES_HABITS.ADD_HABIT: 
         return {...state}

    case ACTION_TYPES_HABITS.DELETE_HABIT: 
         return {...state}
         
    case ACTION_TYPES_HABITS.ARCHIVE_HABIT: 
          return {...state}  
          
    default: 
    return state 
              
    }

}