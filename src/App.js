import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import City from "./City";
import WeatherDescription from "./WeatherDescription";
import WeatherMeasures from "./WeatherMeasures";
import WeatherForecast from "./WeatherForecast";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <div className="col-8">
                <Search />
              </div>
              <div className="col-4">
                <City />
              </div>
            </div>

            <WeatherDescription />
            <WeatherMeasures />
            <WeatherForecast />
          </div>
          <div className="footer">
            <small>
              <a href="https://github.com/bettyYHchen/weather-app">
                Open-souce code
              </a>
              by Betty Chen
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


