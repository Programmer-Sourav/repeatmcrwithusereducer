export const initialState = {
    habits: [], 
    addHabit: "", 
    deleteHabit: "", 
    archiveHabits: [], 
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
         const habitDetails = action.payload;
         return {...state,  habits: [...state.habits, habitDetails]}

    case ACTION_TYPES_HABITS.DELETE_HABIT: 
         return {...state, habits: state.habits.filter((habit)=>(habit.id!==action.payload))}
         
    case ACTION_TYPES_HABITS.ARCHIVE_HABIT: 
          return {...state, archiveHabits: [...state.habit, action.payload]}  

    case ACTION_TYPES_HABITS.EDIT_HABIT: 
          return {...state, habits: state.habits.map((habit)=>(habit.id===action.payload.id ? {...habit, title: action.payload.title, frequency: action.payload.frequency, goal: action.payload.goal} : habit))}      
          
    default: 
    return state 
              
    }

}