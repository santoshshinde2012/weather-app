export const FAHRENHEIT = 'fahrenheit';
export const CELSIUS = 'celsius';

export function kelvinToFahrenheit(kelvin) {
	let fahrenheit = (( kelvin - 273.15) * 9/5) + 32;
	return Math.round(fahrenheit);
}

export function kelvinToCelsius(kelvin) {
	let celsius = kelvin - 273.15;
	return Math.round(celsius);
}
