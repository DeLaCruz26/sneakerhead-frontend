export const getSneakers = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' })
        fetch('http://localhost:3000/sneakers')
        .then(resp => resp.json())
        .then(sneakers => dispatch({ type: 'SET_SNEAKERS', sneakers }))
    }
}

export const addSneaker = (sneaker, history) => {
    return dispatch => {
        fetch('http://localhost:3000/sneakers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sneaker })
        })
        .then(resp => resp.json())
        .then(sneaker => {
            dispatch({ type: 'ADD_SNEAKER', sneaker })
            history.push('/sneakers')
        })
    }
}

export const deleteSneaker = (id, history) => {
    return dispatch => {
        fetch(`http://localhost:3000/sneakers/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(sneaker => {
            dispatch({ type: 'DELETE_SNEAKER', sneaker })
            history.push('/sneakers')
        })
    }
}