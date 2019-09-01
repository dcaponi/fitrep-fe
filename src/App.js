import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/home';
import Rating from './components/rating/rating';
import Stats from './components/stats/stats';
import RatingAbout from './components/rating-about/rating-about';
import './App.css';
import { connect } from "react-redux";
import { setUser } from "./redux/actions"

class App extends Component {
  constructor(props){
    super(props);
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    let bouncerUrl = process.env.REACT_APP_BOUNCER_URL;
    fetch(`${bouncerUrl}/user`, {
      credentials: 'include'
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.user){
        this.props.setUser({
          isAuthenticated: true,
          currentUser: res.user
        })
      }
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={() => window.location = `${process.env.REACT_APP_LOGIN_URL}/login?redirect=${process.env.REACT_APP_RATINGS_URL}/stats`} />
          <Route path="/stats" component={Stats} />
          <Route path="/rating/:id" component={Rating} />
          <Route path="/rating/" component={RatingAbout} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
};

const AuthedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default AuthedApp;
