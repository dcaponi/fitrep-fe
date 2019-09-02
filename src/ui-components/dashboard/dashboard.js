import React from "react";
import StatsBox from "../stats-box/stats-box";

import "./dashboard.css"

const Dashboard = (props) => {
  return (
    <div>
      <h2 className="page-title">My Core Statistics</h2>
      <div className="stats-boxes">
        <div className="stats-box-wrapper">
          <StatsBox calc="avg" title="Average Rating" input={props.ratings}/>
        </div>
        <div className="stats-box-wrapper">
          <StatsBox calc="max" title="Highest Rating" input={props.ratings}/>
          <StatsBox calc="min" title="Lowest Rating" input={props.ratings}/>
        </div>
        <div className="stats-box-wrapper">
          <StatsBox calc="count" title="Total Ratings" input={props.ratings}/>
          <StatsBox calc="countUniq" title="Unique Ratings" input={props.ratings}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
