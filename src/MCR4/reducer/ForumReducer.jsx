export const initialState = {
    forum : []
}


export const ACTION_TYPES_FORUM = {
    SORT_LATEST : "SORT_LATEST", 
    SORT_TRENDING: "SORT_TRENDING", 
    UPVOTES: "UPVOTES", 
    DOWNVOTES: "DOWNVOTES", 
    INITIALIZE: "INITIALIZE", 
    BOOKMARK: "BOOKMARK"
}

export default function ForumReducer(state, action) {

    switch(action.type){
        case ACTION_TYPES_FORUM.SORT_LATEST: 
        return {...state, forum: state.forum.sort((a,b)=> new Date(a.createdAt)> new Date(b.createdAt) ? 1 : -1)}
        case ACTION_TYPES_FORUM.SORT_TRENDING: 
        return {...state, forum: state.forum.sort((a,b)=> a.upvotes>b.upvotes )}
        case ACTION_TYPES_FORUM.UPVOTES: 
        const modifiedData = state.forum.map((stateItem)=>stateItem.postId===action.payload? {...stateItem, upvotes: stateItem.upvotes+1} : stateItem)
        return {...state, forum: modifiedData}
        case ACTION_TYPES_FORUM.DOWNVOTES: 
        return {...state, forum: state.forum.map((stateItem)=>stateItem.postId===action.payload? {...stateItem, downvotes: stateItem.downvotes-1, upvotes: stateItem.upvotes - 1} : stateItem)}
        case ACTION_TYPES_FORUM.INITIALIZE: 
        return {...state, forum : action.payload}
        case ACTION_TYPES_FORUM.BOOKMARK: 
        return {...state, forum: state.forum.map((stateItem)=>stateItem.postId===action.payload ? {...stateItem, isBookmarked: !stateItem.isBookmarked } : stateItem)}
        default: 
        return state
    }

}