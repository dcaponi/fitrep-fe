import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LeftRail from './ui-components/left-rail/left-rail';
import Header from './ui-components/header/header';
import Home from './components/home/home';
import Rating from './components/rating/rating';
import Stats from './components/stats/stats';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <LeftRail/>
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Stats} />
        <Route path="/rating" component={Rating} />
      </div>
    </BrowserRouter>
  );
}

export default App;
