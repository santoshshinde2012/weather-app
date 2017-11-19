import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

renderWeather(cityData){
    const name=cityData.city.name;
    const {lat,lon}=cityData.city.coord;
    // const lat=cityData.city.coord.lat;
    // const lon=cityData.city.coord.lon;


    const temps=cityData.list.map(weather=>weather.main.temp);
      const pressures=cityData.list.map(weather=>weather.main.pressure);
        const humidities=cityData.list.map(weather=>weather.main.humidity);
  return (
    <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='orange'/> </td>
        <td><Chart data={pressures} color='red' /></td>
        <td><Chart data={humidities} color='black' /></td>

    </tr>
  );
}
  render(){

return(
<table className='table table-hover'>
  
  <tbody>
    {this.props.weather.map(this.renderWeather)}
  </tbody>
</table>

)

  }
}

function mapStatetoProps({weather}){// {weather} =state.weather
  return {weather}/// weather: weather


}

export default connect(mapStatetoProps)(WeatherList);
