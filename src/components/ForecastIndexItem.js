import React from 'react';

import {
				CELSIUS,
				FAHRENHEIT,
				kelvinToFahrenheit,
				kelvinToCelsius,
				} from '../util/temperatureconverter';

import { convertDate } from '../util/forecastdata';


const ForecastIndexItem = ({temperatureUnits, weather}) => {
		let units;
		temperatureUnits === FAHRENHEIT ? units = 'F' : units = 'C';

		const kelvinHighTemp = weather.main.temp_max;
		const kelvinLowTemp = weather.main.temp_min;
		let displayHighTemp, displayLowTemp;

		if (temperatureUnits === FAHRENHEIT) {
			displayHighTemp = kelvinToFahrenheit(kelvinHighTemp);
			displayLowTemp = kelvinToFahrenheit(kelvinLowTemp);
		} else if (temperatureUnits === CELSIUS) {
			displayHighTemp = kelvinToCelsius(kelvinHighTemp);
			displayLowTemp = kelvinToCelsius(kelvinLowTemp);
		}

		return (
				<div className='forecast-index-item'>
					<p className='date'>{convertDate(weather)}</p>
					<p className='high-temp'>{displayHighTemp}˚{units}</p>
					<p className='low-temp'>{displayLowTemp}˚{units}</p>
					<p className='description'>{weather.weather[0].description}</p>
				</div>
		);
};

ForecastIndexItem.propTypes = {
	weather: React.PropTypes.object,
	temperatureUnits: React.PropTypes.string,
};


export default ForecastIndexItem;
