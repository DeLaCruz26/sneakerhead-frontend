const initialState = {
    loading: true,
    sneakers: []
  };
  
  export default (state=initialState, action) => {
    switch(action.type){
      case "LOADING":
        return {...state, loading: true};
      case "LOAD_SNEAKERS":
        return {...state, loading: false, sneakers: action.sneakers};
      case "ADD_SNEAKERS":
        console.log('h')
        return {...state, loading: false, sneakers: [...state.sneakers, action.sneaker]};
        case "DELETE_SNEAKERS":
          const filteredSneakers = state.sneakers.filter(sneaker => sneaker.id !== action.sneakerId)
          return { ...state, sneakers: filteredSneakers }
        case "UPDATE_SNEAKERS":
          console.log('h')
          console.log(action.updatedSneakers)
          let updatedSneakers = action.updatedSneakers
          let reFilteredSneakers = state.sneakers.filter(sneaker => sneaker.id !== updatedSneakers.id)
          reFilteredSneakers.push(action.updatedSneakers)
          return { ...state, sneakers: reFilteredSneakers }
      default:
        return state;
    };
  };