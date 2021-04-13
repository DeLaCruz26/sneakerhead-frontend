import React from 'react'

const SneakerForm = (props) => {
  let for_sale
    
  if (props.sale === true ){
    for_sale = "This is For Sale, Select to Change"
  } else {
    for_sale = "Not For Sale, Select To Change"
  }

  return (
      <div>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
              <input type="text"  value={props.name} name="name" id="name" className="form-control" onChange={(event) => props.handleOnChange(event)} />
            <div className="errorMsg">{props.errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category: </label>
            <input type="text" value={props.category} name="category" id="category" className="form-control" onChange={(event) => props.handleOnChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea value={props.description} className="form-control" name="description"id="description" rows="3" onChange={(event) => props.handleOnChange(event)}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL: </label>
              <input type="text"  value={props.image} name="image" id="image" className="form-control" onChange={(event) => props.handleOnChange(event)} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" value={props.sale} className="form-check-input" name="sale" id="sale" onChange={(event) => props.handleOnSelect(event)} />
            <label className="form-check-label"> {for_sale}</label>
          </div>
      </div>
  
  )
}

export default SneakerForm