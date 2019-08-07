import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/home';
import Rating from './components/rating/rating';
import Stats from './components/stats/stats';
import RatingAbout from './components/rating-about/rating-about';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Stats} />
        <Route path="/rating/:id" component={Rating} />
        <Route path="/rating/" component={RatingAbout} />
      </div>
    </BrowserRouter>
  );
}

export default App;
