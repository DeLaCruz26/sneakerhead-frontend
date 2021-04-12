import React, { Component } from 'react'
import SneakerCard from '../components/Card/SneakerCard';
import { connect } from 'react-redux'


class SneakerListContainer extends Component {
// whos powers include an essential constant yin-yang with sneakers and sneakerFilter
  constructor(props) {
    super(props)
    this.state = {
      sneakerFilter: ""
    }
  }

  handleSearch = (e) => {
    debugger;
    this.setState({
      sneakerFilter: e.target.value
    })

  }

  // this is functional, yes, but not DRY...
  querySneakers = () => {
    let findAlike = this.state.sneakerFilter.toLowerCase()
    return this.props.sneakers.filter ((sneaker) => 
      sneaker.name.toLowerCase().includes(findAlike) || sneaker.description.toLowerCase().includes(findAlike) || sneaker.category.toLowerCase().includes(findAlike)
    ).sort(function(a,b){return (a.id - b.id)})
  }

  render () {
    if (this.props.loading) {
        return <div className="container">Loading info from backend server...this can take up to 30 seconds...</div>
      }
    else {
      const sneakersList = this.querySneakers().map ((sneaker) => {
        return (
      // many children - when editing from sneaker card, this is parent to sneaker form container, hence ability to call onEditingChange
          <div className="col-md-4" id={sneaker.id}>
            <SneakerCard
            key={sneaker.id}
            id={sneaker.id}
            name={sneaker.name} 
            category={sneaker.category} 
            description={sneaker.description}
            imgsrc={sneaker.image}
            vegan={sneaker.vegan}
            contains_nuts={sneaker.contains_nuts}
            contains_dairy={sneaker.contains_dairy}
            />
          </div>
        )
      })

      return(
        <div>
          <span className="align-middle">
            <h1 className="text-center">All Sneakers</h1>
            <div className="container-fluid d-flex justify-content-center" >
              <div className='card text-center shadow' >
                <label htmlFor="Search">Search by Name: </label>
                <input type="text" id="filter" value={this.state.sneakerFilter} onChange={this.handleSearch} />
              </div>
            </div>
          </span>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              { sneakersList }
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  deleteSneaker: id => dispatch ({type: "DELETE_SNEAKERS", id})
})

const mapStateToProps = state => {
  return {
      sneakers: state.sneakersReducer.sneakers,
      loading: state.sneakersReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerListContainer);