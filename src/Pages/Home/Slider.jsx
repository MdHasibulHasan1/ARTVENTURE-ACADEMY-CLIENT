import React, { useState, useEffect } from "react";
import "./Slider.css"; // Import CSS file with styles

const Slider = () => {
  const [value, setValue] = useState(20); // Initial slider value

  // Function to update slider
  const updateSlider = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  useEffect(() => {
    // Code to update the slider appearance
    const obj = document.querySelector(".slider");
    const min = obj.getAttribute("min");
    const max = obj.getAttribute("max");
    const range = Math.round(max - min);
    const percentage = Math.round(((value - min) * 100) / range);
    const nextObj = obj.nextSibling;
    nextObj.querySelector(".bar-btn").style.left = percentage + "%";
    nextObj.querySelector(".bar > span").style.width = percentage + "%";
    nextObj.querySelector(".bar-btn > span").innerText = percentage;
  }, [value]);

  return (
    <div className="slider-container">
      <input
        className="slider"
        value={value}
        min={0}
        max={100}
        name="rangeslider"
        type="range"
        onChange={updateSlider}
      />
      <div className="bar">
        <span></span>
      </div>
      <div className="bar-btn">
        <span>0</span>
      </div>
    </div>
  );
};

export default Slider;
