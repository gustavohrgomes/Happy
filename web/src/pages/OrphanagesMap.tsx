import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
}

function OrphanagesMap() {
  const [ orphanages, setOrphanages ] = useState<Orphanage[]>([]);
  
  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita <span role="img" aria-label="Smile Emoji">😀</span></p>
        </header>

        <footer>
          <strong>Araraquara</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-21.7777094,-48.1964758]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        { orphanages.map(orphanage => {
          return (
            <Marker
              key={ orphanage.id }
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                { orphanage.name }
                <Link to={ `/orphanages/${orphanage.id}` }>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;