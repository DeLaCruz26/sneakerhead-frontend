import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSneaker } from '../../actions/sneakerActions'

class Form extends Component {
    state = {
        brand: '',
        price: 0,
        description: '',
        image_link: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addSneaker(this.state, this.props.history)
    }
    
    render() {
        return (
            <div>
                <h3>Add a pair of Sneakers</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='brand'>Brand</label>
                        <input className='form-control' type='text' id='brand' name='brand' value={this.state.brand} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='brand'>Price</label>
                        <input className='form-control' type='text' id='price' name='price' value={this.state.price} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='brand'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' value={this.state.description} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='brand'>Image</label>
                        <input className='form-control' type='text' id='image_link' name='image_link' value={this.state.image_link} onChange={this.handleChange} required/>
                    </div>
                    <br/>
                    <button className='button-color' type='submit'>Add Sneakers</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sneakers: state.sneakers
    }
}

export default connect(mapStateToProps, { addSneaker })(Form);
