const defaultState = {
    count: 0
}

export const DataReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'ADD_UNCORRECT':
            return action
            break;
    
        default:
            return state
            break;
    }
    
}