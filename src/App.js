import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getSneakers } from './actions/sneakerActions'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer/Footer.js'
import Home from './components/HomePage/Home.js'
import Navbar from './components/NavBar/Navbar'
import Index from './components/sneakers/Index'
import Form from './components/sneakers/Form'

class App extends Component {

    componentDidMount(){
      this.props.getSneakers();
    }

    render() {
      if(this.props.loading) {
        return (
          <h3>Loading...</h3>
        )
      }
      return (
        <Router >
          <Navbar />
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/sneakers' component={Index}/>
            <Route exact path='/sneakers/new' component={Form}/>
          </Switch>
          <Footer />
        </Router> 
      );
    } 
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getSneakers })(App);