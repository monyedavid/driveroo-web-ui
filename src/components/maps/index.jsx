import * as React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import userLocationURL from './user_location.svg';

import './map.css';

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [50, 82],
});

function App({ ptsArray, location }) {
  const position = [location.lat, location.long];
  return (
    <div className="map">
      <Map
        className="map"
        worldCopyJump={true}
        center={position}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon} />

        {/* <Marker
          key={message._id}
          position={[message.latitude, message.longitude]}
          icon={messageIcon}
        >
          <Popup>
            <p>
              <em>{message.name}:</em> {message.message}
            </p>
          </Popup>
        </Marker> */}
      </Map>
    </div>
  );
}

export default App;
