import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Resultados from './components/Resultados';
import CONFIG from './config/config_default';
import { useState, useEffect } from 'react';
import { mock1 } from './constants/mock';

function App() {

  const [lat,setLat] = useState(CONFIG.default_lat);
  const [lon,setLon] = useState(CONFIG.default_lon);

  useEffect(() => {
    async function fetchData(){
      try{
        if(CONFIG.use_server){
          let resultado = await fetch(CONFIG.server_url);
          let content = await resultado.json();
          //content.cosas que necesites de la api para pintar la página
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
      <header className="App-header">
        <Header />
        <Buscador />
        <Resultados />
      </header>
    </div>
  );
}

export default App;
