import axios from 'axios';
import config from '../../config/common';

let ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${config.api.key}`;

export  let FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
  let url=`${ROOT_URL}&q=${city},in`;
  let request=axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload:request
  };
}
