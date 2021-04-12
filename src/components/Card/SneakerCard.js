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
    let num = this.props.id
    document.getElementById(num).scrollIntoView({ behavior: 'smooth' })
    this.setState ({
      editing: true
    })
  }
  handleUpdateSubmit = () => {
    let num = this.props.id
    document.getElementById(num).scrollIntoView({ behavior: 'smooth' })
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
                vegan={this.props.vegan}
                id={this.props.id}
                />
        </div>
      )
    }
    return(
      <div className='card text-center shadow'>
        <div className="overflow">
          {/* renders image not in the meal description component
            why do that?? in order to fine tune the visuals of the meal description component in future prod...
          */}
          <img src={this.props.imgsrc} alt={`${this.props.name}`} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <SneakerDescription 
            name={this.props.name}
            category={this.props.category}
            description={this.props.description} 
            vegan={this.props.vegan}
            nuts={this.props.contains_nuts}
            dailry={this.props.contains_dairy}
            />
          <DeleteSneakerButton  deleteSneaker={this.props.deleteSneaker} id={this.props.id}/>
          {/* ok so if DeleteMeal is its own concer, why not Editing? */}
          <EditSneakerButton handleEditing={this.handleEditing}/>
        </div>
      </div>
    );
  }
}

export default SneakerCard;