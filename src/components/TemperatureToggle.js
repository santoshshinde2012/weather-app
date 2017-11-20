import React from 'react';
import { CELSIUS, FAHRENHEIT } from '../util/temperatureconverter';


const TemperatureToggle = ({temperatureUnits, toggleTemperature}) => (
	<div className="temperature-toggle">
		<button
			className={temperatureUnits === CELSIUS ? 'active' : 'inactive'}
			value={CELSIUS}
			onClick={toggleTemperature}>
			Celsius
		</button>
		<button
			className={temperatureUnits === FAHRENHEIT ? 'active' : 'inactive'}
			value={FAHRENHEIT}
			onClick={toggleTemperature}>
			Fahrenheit
		</button>
	</div>
);

TemperatureToggle.propTypes = {
	temperatureUnits: React.PropTypes.string,
	toggleTemperature: React.PropTypes.func,
};


export default TemperatureToggle;
