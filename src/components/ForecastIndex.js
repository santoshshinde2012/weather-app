import React from 'react';
import ForecastIndexItem from './ForecastIndexItem';
import { getValuesFromData } from '../util/forecastdata';

const ForecastIndex = ({forecastData, temperatureUnits}) => (
	<div className="forecast-index">
		{getValuesFromData(forecastData).map(
			weather => (
				<ForecastIndexItem
					key={weather.dt}
					weather={weather}
					temperatureUnits={temperatureUnits}
				/>
			)
		)}
	</div>

);

ForecastIndex.propTypes = {
	forecastData: React.PropTypes.object,
	temperatureUnits: React.PropTypes.string,
};

export default ForecastIndex;
