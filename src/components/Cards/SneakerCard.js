import React, { Component } from 'react';
import { deleteSneaker } from '../../actions/sneakerActions'
import { connect } from 'react-redux'
import './card-style.css'

class SneakerCard extends Component {
    render() {
        const {brand, price, description, image_link, id, history} = this.props
        return (
            <div className='card text-center shadow'>
                <div className='overflow'>
                    <img alt='Sneaker' src={image_link} className='card-img-top'/>
                </div>
                <div className='card-body text-dark'>
                    <h3 className='card-title'>{brand}</h3>
                    <p className='card-text text-secondary'>{price}</p>
                    <p className='card-text text-secondary'>{description}</p>
                    <br/>
                    <button className='btn btn-outline-success' onClick={() => this.props.deleteSneaker(id, history)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteSneaker })(SneakerCard);








