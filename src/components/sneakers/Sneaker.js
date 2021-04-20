import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSneaker } from '../../actions/sneakers/sneakerActions'

class Sneaker extends Component {
    render() {
        const {brand, price, description, image_link, id, history} = this.props
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='sneakers'>
                        <h3>{brand}</h3>
                        <p>{price}</p>
                        <p>{description}</p>
                        <img alt='Sneaker' src={image_link}/>
                        <br/>
                        <button className='button-color' onClick={() => deleteSneaker(id, history)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteSneaker})(Sneaker);
