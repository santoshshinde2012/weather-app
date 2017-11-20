import Moment from 'moment';

export function getForecastByDay(data) {
	let forecastByDate = {};
	for (let i = 0; i < data.length; i++) {
		//Break out of this thing if we already have five days' worth of data
		if (Object.keys(forecastByDate).length === 5) {
			break;
		}
		//Pull out the date (minus the time OWM provides)
		let convertedDate = Moment(data[i].dt_txt).format();
		let key = convertedDate.slice(0,10);
		//Check if we already have this date. If not, add it to the result.
		if (!(forecastByDate.hasOwnProperty(key))) {
			forecastByDate[key] = data[i];
		}
	}
	return forecastByDate;
}

//I had high hopes about using Object.values here, but IE and Safari don't agree.
export function getValuesFromData(data) {
	return Object.keys(data).map(key => data[key]);
}

export function convertDate(weatherData) {
	return Moment(weatherData.dt_txt.slice(0,10)).format('MMMM Do');
}
