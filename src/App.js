import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import './App.css'
import Footer from './components/Footer/Footer.js'
import Home from './components/HomePage/Home.js'
import SneakersListContainer from './containers/SneakersListContainer.js'
import SneakerFormContainer from './containers/SneakerFormContainer.js'
import SneakerPlannerContainer from './containers/SneakerPlannerContainer.js'
import { fetchSneakers } from './actions/sneakerActions';
import Navbar from './components/Navbar/Navbar'

class App extends Component {

    componentDidMount(){
      this.props.fetchSneakers();
    }

    render() {
      return (
        <Router >
          <Navbar />
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/sneakers' component={SneakersListContainer}/>
            <Route exact path='/sneakers/new' component={SneakerFormContainer}/>
            <Route exact path='/sneakers/planner' component={SneakerPlannerContainer}/>
          </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default connect(null, { fetchSneakers })(App);