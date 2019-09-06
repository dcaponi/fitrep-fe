import React from "react";

import "./stats-box.scss"

const StatsBox = (props) => {
  let ratingValues = [];
  let uniqRatings = {};
  let max = 0;
  let min = 10;
  let sum = 0;
  let boxValue = 0;

  if( props.input.length > 0 ){
    props.input.forEach( (rating) => {
      if( rating.rating > max ){
        max = rating.rating
      }
      if( rating.rating < min ){
        min = rating.rating
      }
      sum += rating.rating;
      ratingValues.push(rating.rating);
      if( !uniqRatings[rating.rater_ip] ){
        uniqRatings[rating.rater_ip] = [rating.rating];
      }
      else{
        uniqRatings[rating.rater_ip].push(rating.rating);
      }
    })
    switch (props.calc) {
      case "min":
        boxValue = min;
        break;
      case "max":
        boxValue = max;
        break;
      case "avg":
        if(ratingValues.length > 0){
          boxValue = sum / ratingValues.length;
        }
        break;
      case "countUniq":
        boxValue = Object.keys(uniqRatings).length;
        break;
      case "count":
        boxValue = ratingValues.length;
        break;
      default:
        boxValue = 0;
    }
  }
  else{
    boxValue = 0;
  }

  return (
    <div className="stats-box">
      <h3 className="stat-title">{props.title}</h3>
      <h1>{boxValue}</h1>
    </div>
  )
}

export default StatsBox;
