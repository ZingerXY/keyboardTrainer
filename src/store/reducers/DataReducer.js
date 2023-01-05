const defaultState = {
    count: 0,
    correct: 0
}

export const DataReducer = (state=defaultState, action) => {
    switch(action.type){
        // case 'ADD_UNCORRECT':
        //     return {count: action.count}
        //     break;
        // case 'ADD_CORRECT':
        //     return {correct: action.correct};
        //     break;
        // default:
        //     return state
        //     break;
        case 'ADD_UNCORRECT':
            return {
                ...state, count: action.count
            }
            break;
        case 'ADD_CORRECT':
            return {
                ...state, correct: action.correct
            }
            break;
        default:
            return state
            break;
    }
    
}