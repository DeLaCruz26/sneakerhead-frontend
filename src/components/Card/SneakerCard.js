import React, { Component } from 'react'
import DeleteSneakerButton from '../Buttons/DeleteSneakerButton.js'
import EditSneakerButton from '../Buttons/EditSneakerButton'
import SneakerDescription from './SneakerDescription.js'
import SneakerFormContainer from '../../containers/SneakerFormContainer.js'
import './card-style.css'

// meal cards pass down handleEditing and onUpdateSubmit as props
// it can handle updating and submiting a patch
export class SneakerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  handleEditing = () => {
    this.setState ({
      editing: true
    })
  }
  handleUpdateSubmit = () => {
    console.log('setting editing back to false')
    this.setState ({
      editing: false
    })
  }
  render() {
 
    if (this.state.editing) {
      return (
        <div className='card text-center shadow'>
                < SneakerFormContainer
                onUpdateSubmit={this.handleUpdateSubmit}
                editing={this.state.editing}
                name={this.props.name} 
                category={this.props.category} 
                description={this.props.description} 
                image={this.props.imgsrc} 
                sale={this.props.sale}
                id={this.props.id}
                />
        </div>
      )
    }
    return(
      <div className='card text-center shadow'>
        <div className="overflow">
          <img src={this.props.imgsrc} alt={`${this.props.name}`} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <SneakerDescription 
            name={this.props.name}
            category={this.props.category}
            description={this.props.description} 
            sale={this.props.sale}
            worn={this.props.worn}
            neverWorn={this.props.never_worn}
            />
          <DeleteSneakerButton  deleteSneakers={this.props.deleteSneakers} id={this.props.id}/>
          <EditSneakerButton handleEditing={this.handleEditing}/>
        </div>
      </div>
    );
  }
}

export default SneakerCard;