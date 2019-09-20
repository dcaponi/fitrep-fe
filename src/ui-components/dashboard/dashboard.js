import React from "react";
import { Max, Min, Avg, TotalCount, UniqCount } from "../stats-box/stats-calculator";
import StatsBox from "../stats-box/stats-box";

import "./dashboard.scss"

const Dashboard = (props) => {
  return (
    <div>
      <h2 className="page-title">My Core Statistics</h2>
      <div className="stats-boxes">
        <div className="stats-box-segment">
          <StatsBox title="Average Rating"><Avg input={props.ratings}/></StatsBox>
        </div>
        <div className="stats-box-segment">
          <StatsBox title="Highest Rating"><Max input={props.ratings}/></StatsBox>
          <StatsBox title="Lowest Rating"><Min input={props.ratings}/></StatsBox>
        </div>
        <div className="stats-box-segment">
          <StatsBox title="Total Ratings"><TotalCount input={props.ratings}/></StatsBox>
          <StatsBox title="Unique Ratings"><UniqCount input={props.ratings}/></StatsBox>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
