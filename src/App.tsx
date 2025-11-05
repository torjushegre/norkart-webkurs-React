import Header from './components/Header';
import { MapLibreMap } from './components/MapLibreMap';
import './index.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RMap, RMarker } from 'maplibre-react-components';

const mountain: [number, number] = [10.3920317, 63.4228553];

function App() {
  return (
    <>
      <Header />
      <MapLibreMap />
      <RMap
        minZoom={6}
        initialCenter={mountain}
        initialZoom={8}
        mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
        >
      <RMarker longitude={mountain[0]} latitude={mountain[1]} />
      </RMap>
    </>
  );
}

export default App;
