import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let city = props.city;
  let apiKey = "73eee4c0adad9e9175d692ed1fe44b49";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <div className="Weather">
        <h1>
          The temperature in {props.city} is {Math.round(temperature)} ℃.
        </h1>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h1>Loading the temperature for {props.city}</h1>
      </div>
    );
  }
}
