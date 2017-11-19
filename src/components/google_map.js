import React, {Component} from 'react';
import config from '../../config/common';


class GoogleMap extends Component{

  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng: this.props.lon
      },
      key: config.googlemap.key

    })
  }

  render(){
    return (
      <div ref='map'/>
    )

  }


}
export default GoogleMap
