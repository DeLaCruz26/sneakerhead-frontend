import React from 'react'

const UpdateSneakerButton = props => {


    return (
      <div>
        <button onClick={props.handleOnUpdate} className="btn btn-outline-success"> Update </button>
      </div>
    )

}

export default UpdateSneakerButton;