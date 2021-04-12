import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteSneakers } from '../../actions/sneakerActions.js'

const DeleteSneakerButton = props => {

  function handleOnClick() {
   window.confirm("Are you sure you wish to delete this item?") &&
   props.deleteSneakers(props.id, props.history)
  }


    return (
      <div>
        <button onClick={handleOnClick} className="btn btn-outline-danger"> Delete</button>
      </div>
    )

}

export default withRouter(connect(null, { deleteSneakers })(DeleteSneakerButton));