import './App.css';
import Header from './Header';
import Resultados from './Resultados';
import CONFIG from './config/config';
import { useState } from 'react';
import { mock1 } from './constants/mock';

function App() {

  const [lat, setLat] = useState(CONFIG.default_lat);
  const [lon, setLon] = useState(CONFIG.default_lon);
  const [datos, setDatos] = useState();

  const fetchData = async (param) => {
    if (CONFIG.use_server){
      try {

        let apiDatos = await fetch(CONFIG.server_url + '?lat='+lat+'&lon='+lon+'&appid='+CONFIG.api_key);
        apiDatos = await apiDatos.json();
        console.log(apiDatos);
        setDatos(apiDatos);

      } catch (error){
        console.log("Error");
      }
    } else {
        setDatos(mock1);
    }
  }


  return (
    <div className="App">
      <Header />
      <div>
          <h2 id = "titulo"> El tiempo </h2>
          <input type ="number" id = "latitud" value = {lat} onChange={e => setLat(e.target.value)}></input>
          <input type ="number" id = "longitud" value = {lon} onChange={e => setLon(e.target.value)}></input>
          <button id = "buscar" onClick={()=>fetchData()}> Buscar </button>
      </div>
      {datos && <Resultados numItems = {CONFIG.num_items} items = {datos}/>}
    </div>
  );
}

export default App;
