import React, { Component } from 'react';
import Header from '../../ui-components/header/header'
import LeftRail from '../../ui-components/left-rail/left-rail'

import './home.css';
class Home extends Component {
  render(){
    return (
      <div className="home">
      <Header/>
      <LeftRail/>
      home
      </div>
    );
  }
}

export default Home
