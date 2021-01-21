import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [weatherDesc, setWeatherDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let apiKey = "73eee4c0adad9e9175d692ed1fe44b49";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(function (response) {
      setTemperature(response.data.main.temp);
      setWind(response.data.wind.speed);
      setHumidity(response.data.main.humidity);
      setWeatherDesc(response.data.weather[0].main);
    });
    alert(`The temperature in ${city} is ${Math.round(temperature)}; 
    the humidity is ${humidity}; 
    the wind speed is ${wind};
    the description is ${weatherDesc}`);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-8 form-input">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Enter the City or ZIP"
                onChange={ handleUpdate}
              />
            </div>
            <div className="col-4 form-button">
              <input type="submit" className="btn btn-light" value="search" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}