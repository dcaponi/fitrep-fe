import React, { Component } from 'react';
import Header from '../../ui-components/header/header'
import LeftRail from '../../ui-components/left-rail/left-rail'

import './stats.css';
class Stats extends Component {
  render(){
    return (
      <div className="stats">
        <Header/>
        <LeftRail/>
        STATS
      </div>
    );
  }
}

export default Stats;
