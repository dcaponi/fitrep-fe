import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/home';
import Rating from './components/rating/rating';
import Stats from './components/stats/stats';
import RatingAbout from './components/rating-about/rating-about';

import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/rating/:id" component={Rating} />
        <Route exact path="/rating/" component={RatingAbout} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={() => window.location = `${process.env.REACT_APP_LOGIN_URL}/login?redirect=${process.env.REACT_APP_RATINGS_URL}/stats`} />
        <Route path="/stats" component={Stats} />
      </BrowserRouter>
    );
  }
}

export default App;
