import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createSneakers, updateSneakers } from '../../actions/sneakerActions.js'
import SneakerFormUpdating from './SneakerFormUpdating'
import SneakerFormCreating from './SneakerFormCreating'
// This input is for sneaker creating and update. deletion is handled by deleteSneakerButton

export class SneakerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name || "",
      category: props.category ||"",
      description: props.description || "",
      sale: props.sale || false,
      image: props.image || "",
      errors: {}, 
      editing: props.editing || false
    }
  } 
   
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleOnSelect(e) {
      // a poorly abstracted toggle. however, it suffices as a method. 
      // Yet, if there are many checkboxes, 
      // do I need to do it for each case? 
      // Yes, so I need to make this dynamic...
      if (this.state.sale === false) {
        this.setState({
          sale: true
      })
    } else {
        this.setState(
        {
          sale: false
        })
      }
    }
    
    // console logging here to make sure asyc react is correct...
    // handles creation of new object, dispatches to backend...
    handleOnCreate = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const sneakerData = {
          sneaker: tempState
        };
        console.log('a')
        this.props.createSneakers(sneakerData, this.props.history);
        console.log('e')}
      };
    // these two look earily similar, thus can be refactored into one.
    // how exactly--will it require changing a lot of props now, and variables...

    handleOnUpdate =(e) => {
      debugger;
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const tempSneaker = {
          sneaker: tempState
        };
        // onEdingChange is passed down from MealCard as Parent
        // this is double to ensure that editing is no longer true in any state anywhere in application
        console.log('calling onUpdateSubmit')
        this.props.onUpdateSubmit();
        // onUpdateSubmit basically only changes state.editing of parent (MealCard)
        // back from to false, as we are no longer editing. now its up to the servers to do their async magics...
        console.log('a')
        this.props.updateSneakers(this.props.id, tempSneaker);
        console.log('e')
      }
      };

      
    render() { 
        if (this.state.editing === true ) {
          return (
              <SneakerFormUpdating
                handleOnUpdate={this.handleOnUpdate.bind(this)}
                handleOnChange={this.handleOnChange.bind(this)}
                handleOnSelect={this.handleOnSelect.bind(this)} 
                editing={this.state.editing} 
                name={this.state.name} 
                category={this.state.category} 
                description={this.state.description} 
                image={this.state.image} 
                sale={this.state.sale}
                id={this.state.id}
                errors={this.state.errors}          
              />
          )
        } else {  
        return (
            <SneakerFormCreating
              handleOnCreate={this.handleOnCreate.bind(this)}
              handleOnChange={this.handleOnChange.bind(this)}
              handleOnSelect={this.handleOnSelect.bind(this)}
              editing={this.state.editing} 
              name={this.state.name} 
              category={this.state.category} 
              description={this.state.description} 
              image={this.state.image} 
              sale={this.state.sale}
              id={this.state.id}
              errors={this.state.errors}          
              />
        );
      };
    }

    validateForm = () => {
    
      let formIsValid = true
      let errors = {}
    
    if (!this.state.name) {
      formIsValid = false
      errors['name'] = '*Please enter a name for these sneakers'
      document.querySelector('div.errorMsg').parentNode.scrollIntoView({ behavior: 'smooth' })
    }
    // ok, but if you only have one validation on front end
    // and no validations of errors being sent anywhere receive on front end...jams up before being sent

    this.setState({ errors })
    
    return formIsValid
    }
};


export default withRouter(connect(null, { createSneakers, updateSneakers })(SneakerInput));