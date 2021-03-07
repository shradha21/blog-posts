const postInitialState = []

const postReducer = (state = postInitialState,action) => {
    switch(action.type) {
        case 'ADD_POST': {
            return state.concat(action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default postReducer