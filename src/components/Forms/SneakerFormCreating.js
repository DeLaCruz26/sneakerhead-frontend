import React from 'react'
import SneakerForm from './SneakerForm'
import CreateSneakerButton from '../Buttons/CreateSneakerButton'

const SneakerFormCreating = (props) => {
  
    return (
      <form onSubmit={props.handleOnCreate}>
        <div className='card text-center shadow' >
          <SneakerForm
            handleOnCreate={props.handleOnCreate}
            handleOnChange={props.handleOnChange}
            handleOnSelect={props.handleOnSelect}
            name={props.name} 
            editing={props.editing}  
            category={props.category} 
            description={props.description} 
            image={props.image} 
            vegan={props.vegan}
            id={props.id}
            errors={props.errors} 
          />
          <CreateSneakerButton handleOnCreate={props.handleOnCreate} />
        </div>
      </form>
    )
}

export default SneakerFormCreating