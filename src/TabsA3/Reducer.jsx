export const initialState = {
    data: [] ,
    currentTab: ""
}

export const ACTION_TYPES = {
    INITIALIZE: "INITIALIZE",
    CURRENT_TAB: "CURRENT_TAB"
}

export default function Reducer (state, action){
  switch(action.type){
    case ACTION_TYPES.INITIALIZE:
        return {...state}
    case ACTION_TYPES.CURRENT_TAB: 
         return {...state}     
  }
}