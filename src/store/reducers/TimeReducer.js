const defaultState = {
    seconds: 0,
    minutes: 0
}

export const TimeReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'UPDATE_TIME':
            return action
            break;
        default:
            return state
            break;
    }
    
}