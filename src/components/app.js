import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='header-cont'>

          <div className='text-center title'>
            Buildit Weather <span className="title-color">App</span>
          </div>
          <div className='text-hint'>
            ** Please search city from India **
          </div>
          <SearchBar/>

          <div className='header-cont2'>
            <div className='tableHead'>
                <p className='headTitle city'> City </p>
                <p className='headTitle temp'> Temperature (K) </p>
                <p className='headTitle press'> Pressure (hPa)   </p>
                <p className='headTitle hum'> Humidity (%)    </p>
            </div>
          </div>
        </div>

        <div className='weatherList'>
          <WeatherList/>
        </div>

      </div>
    );
  }
}
