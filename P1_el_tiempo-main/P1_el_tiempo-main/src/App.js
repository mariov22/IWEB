import './App.css';
import Header from './Header';
import Resultados from './Resultados';
import CONFIG from './config/config';
import { useState, useEffect } from 'react';
import { mock1 } from './constants/mock';

function App() {

  const [lat, setLat] = useState(CONFIG.default_lat);
  const [lon, setLon] = useState(CONFIG.default_lon);

  useEffect(() => {
    async function fetchData(){
      try{
        if(CONFIG.use_server){
          let resultado = await fetch(CONFIG.server_url);
          let resultadoJSON = await resultado.json();
          //resultadoJSON.cosas que necesites de la api para pintar la página
        }else{
          let resultado = await fetch({mock1});
        }
      } catch(e) {
        console.log("", e);
      }
    }
    fetchData();
  })

  return (
    <div className="App">
      <Header />
      <div>
            <h2 id = "titulo"> El tiempo </h2>
            <input type ="number" id = "latitud" value = {lat} onChange={e => setLat(e.target.value)}></input>
            <input type ="number" id = "longitud" value = {lon} onChange={e => setLon(e.target.value)}></input>
            <button id = "buscar"> Buscar </button>
        </div>
        <Resultados numitems = {CONFIG.num_items} items = {mock1}/>
    </div>
  );
}

export default App;
