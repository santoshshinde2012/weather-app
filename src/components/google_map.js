import React, {Component} from 'react';
const API_KEY='AIzaSyBs41SBinLJJULuKU0JbOgHSAlDFAvhPdk';
class GoogleMap extends Component{
  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng: this.props.lon
      },
      key:API_KEY

    })
  }
  render(){
    return (
      <div ref='map'/>

    )

  }


}
export default GoogleMap
