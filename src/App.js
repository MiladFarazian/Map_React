import React, {Component} from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 50%;
  height: 50%;
`;

class App extends Component {
  render(){
    return (

      <Wrapper>
        <Map className="popup\_inner" google={this.props.google} zoom={13} 
          initialCenter={
                  {
                      lat: 36.984117,
                      lng: -122.030792
                  }
                  }>
            <Marker onClick={this.onMarkerClick}
              name={'University of California, Santa Cruz'}
              position={{lat: 36.9881, lng: -122.0582}} 
            >
            </Marker>
            <Marker onClick={this.onMarkerClick}
              name={'Santa Cruz'}
              position={{lat: 36.974117, lng: -122.030792}} />
        </Map>
      </Wrapper>  
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfuC9_pclonmIh4lVWRooHqjsGNOlvziQ",
})(App)
