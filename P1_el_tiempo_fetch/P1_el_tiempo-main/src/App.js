import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Resultados from './components/Resultados';
import { useEffect } from 'react';
import CONFIG from './config/config_default';
import {mock1} from './constants/mock';

function App() {

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
