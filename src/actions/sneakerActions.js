// for development use:
const BASE_URL = "http://localhost:3001";
// for production use:

const LOADING = { type: "LOADING" };

const addSneakers = (sneakers) => {
  console.log('g')
  return {
      type: "ADD_SNEAKERS",
      sneakers
  }
}

const updateSneakerCard = (updatedSneaker) => {
  console.log('g')
  return{
    type: "UPDATE_SNEAKERS",
    updatedSneaker
  }
}

const deleteSneakersFromSneakers = (sneakersId) => {
  return {
    type: "DELETE_SNEAKERS",
    sneakersId
  }
}

export const fetchSneakers = () => {

  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/sneakers")
      .then((resp) => resp.json())
      .then((sneakers) => dispatch({ type: "LOAD_SNEAKERS", sneakers }));
  };
}

export const createSneakers = (sneakerData, history) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      fetch(BASE_URL + "/sneakers", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(sneakerData)
      })
          .then( resp => resp.json() )
          .then( sneaker => {
              console.log('f')
              dispatch(addSneakers(sneaker));
              history.push('/sneakers');
          })
        console.log('d')
  }
}

export const updateSneakers = (sneakersId, tempSneaker) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      fetch(BASE_URL + "/sneakers/" + `${sneakersId}`, {
          method: "PATCH",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(tempSneaker)
      })
          .then( resp => resp.json() )
          .then( updatedSneaker => {
              console.log('f')
              dispatch(updateSneakerCard(updatedSneaker));
          })
        console.log('d')
  }

}

export const deleteSneakers = (sneakersId) => {
  return (dispatch) => {
      fetch(BASE_URL + '/sneakers/' + sneakersId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteSneakersFromSneakers(sneakersId))
        }
      });
  };
};