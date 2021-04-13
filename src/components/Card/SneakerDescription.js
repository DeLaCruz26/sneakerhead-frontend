import React from 'react'

const SneakerDescription = (props) => {

    return (
      <div>
        <h4 className="card-title">
          {props.name}
        </h4>
        <h5 className="card-title">
          {props.category}
        </h5>
        <p className="card-text text-secondary">
          Description: {props.description}
        </p>
          <p className="card-text text-secondary">
            {props.sale ? "Sale" : " "}
          </p>
          <p className="card-text text-secondary">
            {props.worn ? "Worn" : " "}
          </p>
          <p className="card-text text-secondary">
            {props.never_worn ? "Never Worn" : " "}
          </p>
      </div>
    )

}

export default SneakerDescription