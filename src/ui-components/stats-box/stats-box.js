import React from "react";

import "./stats-box.scss";

const StatsBox = (props) => {
  return (
    <div className="stats-box">
      <h3 className="stat-title">{props.title}</h3>
      <h1>{props.children}</h1>
    </div>
  )
}

export default StatsBox;
