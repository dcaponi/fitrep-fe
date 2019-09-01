import React from "react";
import { IoMdSad, IoMdHappy, IoMdRemoveCircleOutline } from "react-icons/io"
import "./slider.css"

const Slider = (props) => {
  return (
    <div className="slidecontainer">
      <div className="slider-labels">
        <span className="low-end-label"><IoMdSad onClick={() => props.labelClicks(props.minValue)} id="lowEndLabel"/></span>
        <span className="mid-end-label"><IoMdRemoveCircleOutline onClick={() => props.labelClicks(props.midValue)} id="midEndLabel"/></span>
        <span className="high-end-label"><IoMdHappy onClick={() => props.labelClicks(props.maxValue)} id="highEndLabel"/></span>
      </div>
      <input type="range" name="rating" min="1" max="10" step="0.1" value={props.value} onChange={props.slide} className="slider" id="myRange"/>
    </div>
  )
}

export default Slider;
