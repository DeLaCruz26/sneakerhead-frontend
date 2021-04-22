import React, { Component } from 'react';
import SneakerCard from '../Cards/SneakerCard';

class Sneaker extends Component {
    render() {
        const {brand, price, description, image_link, id, history} = this.props
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <SneakerCard image_link={image_link} brand={brand} price={price} description={description} id={id} history={history}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sneaker;
