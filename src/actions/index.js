import axios from 'axios';
const API_KEY='e9777d0c6b442d30fbf9427f62f3f111';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export  const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},in`;
  const request=axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload:request
  };
}
