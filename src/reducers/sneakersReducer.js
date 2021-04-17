const initialState = {
    sneakers: [],
    loading: true
}

const sneakersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state, 
                loading: true
            }
        case 'SET_SNEAKERS':
            return {
                ...state, 
                loading: false, 
                sneakers: action.sneakers
            }
        case 'ADD_SNEAKER':
            return {
                ...state, 
                sneakers: [...state.sneakers, action.sneaker]
            }
        default:
            return state

        case 'DELETE_SNEAKER':
            return {
                ...state,
                sneakers: state.sneakers.filter(sneaker => action.sneaker.id !== sneaker.id)
            }
    }
}

export default sneakersReducer