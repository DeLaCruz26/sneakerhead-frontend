import React from 'react'
import SneakerForm from './SneakerForm'
import UpdateSneakerButton from '../Buttons/UpdateSneakerButton'

const SneakerFormUpdating = (props) => {

    return (
      <form onSubmit={props.handleOnUpdate}>
        <div className='card text-center shadow'>
          <SneakerForm 
            handleOnUpdate={props.handleOnUpdate}
            handleOnChange={props.handleOnChange}
            handleOnSelect={props.handleOnSelect}
            name={props.name} 
            editing={props.editing} 
            category={props.category} 
            description={props.description} 
            image={props.image} 
            sale={props.sale}
            id={props.id}
            errors={props.errors} 
          />
          <UpdateSneakerButton />
        </div>
      </form>
    )
}

export default SneakerFormUpdating