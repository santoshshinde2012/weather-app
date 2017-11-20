import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import ForecastIndex from '../components/ForecastIndex';
import TemperatureToggle from '../components/TemperatureToggle';

import { CELSIUS } from '../util/temperatureconverter';
import { getForecastByDay } from '../util/forecastdata';

class WeatherList extends Component{

  constructor(props) {
    super(props);

    this.state = {
      temperatureUnits: CELSIUS,
      forecastData: [],
    };

    this.toggleTemperature = this.toggleTemperature.bind(this);

  }
  toggleTemperature(e) {
    let selection = e.currentTarget.value;
    this.setState({temperatureUnits: selection});
  }

  renderWeather(weatherData){

    let name = weatherData.city.name;
    let {lat,lon} = weatherData.city.coord;

    let temps = weatherData.list.map(weather=>weather.main.temp);
    let pressures = weatherData.list.map(weather=>weather.main.pressure);
    let humidities = weatherData.list.map(weather=>weather.main.humidity);

    return (
      <table className='table table-hover'>
        <tbody>
          <tr key={name}>
              <td><GoogleMap lat={lat} lon={lon} /></td>
              <td>
                <Chart data={temps} color='orange'/>
              </td>
              <td><Chart data={pressures} color='red' /></td>
              <td><Chart data={humidities} color='black' /></td>
          </tr>
        </tbody>
      </table>

    );
  }
  render(){

    let weatherLength = this.props.weather.length;

    if(weatherLength){

      let weatherData = this.props.weather[0];

      this.state.forecastData = getForecastByDay(weatherData.list);

      return(
        <div>
          <div className='weatherList'>
            {this.renderWeather(weatherData)}
          </div>
          <div>
              <ForecastIndex
                forecastData={this.state.forecastData}
                temperatureUnits={this.state.temperatureUnits}
              />
              <TemperatureToggle
    						temperatureUnits={this.state.temperatureUnits}
    						toggleTemperature={this.toggleTemperature}
    					/>
          </div>
        </div>

      );
    }else {
			return (
				<div className="textCenter">
					<p>{'Please search for your city to get weather data ...'}</p>
				</div>
			);
		}


  }
}

function mapStatetoProps({weather}){// {weather} =state.weather
  return {weather}/// weather: weather


}

export default connect(mapStatetoProps)(WeatherList);
