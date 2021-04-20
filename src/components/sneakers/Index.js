import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sneaker from './Sneaker'

class Index extends Component {
    render() {
        const sneakers = this.props.sneakers.map((sneaker, idx) => <Sneaker key={idx} brand={sneaker.brand} price={sneaker.price} description={sneaker.description} image_link={sneaker.image_link} id={sneaker.id} history={this.props.history} sneaker={sneaker}/> )
        return (
            <div>
                { sneakers }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        sneakers: state.sneakers
    }
}

export default connect(mapStateToProps)(Index);
