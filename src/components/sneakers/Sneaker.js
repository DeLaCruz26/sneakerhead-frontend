import React, { Component } from 'react';
import DeleteSneakerButton from '../Buttons/DeleteSneakerButton';

class Sneaker extends Component {
    render() {
        const { brand, price, description, image_link } = this.props
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='sneakers'>
                        <h3>{brand}</h3>
                        <p>{price}</p>
                        <p>{description}</p>
                        <img alt='Sneaker' src={image_link}/>
                        <br/>
                        <DeleteSneakerButton />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sneaker;
