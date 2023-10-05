import { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import { mockdata } from './constants/products';
import Spinner from 'react-bootstrap/Spinner';
import CONFIG from './config/config';

function App() {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState();

  const fetchData = async (param) => {
    if (CONFIG.use_server){
      try {
        
        let productosApi = await fetch(CONFIG.server_url);
        productosApi = await productosApi.json();

        if (productosApi.status === 200){

          //console.log(apiDatos);
          setProductos(productosApi);
          setLoading(false);

        } else{

          setProductos(null);
          setLoading(true);

        }

      } catch (error){
        setProductos(null);
        console.log(error);
        setLoading(true);
      }
    } else {
        setProductos(mockdata);
        setLoading(false);
    }
  }


  return (
    <div className="App">
      <Header />
      {loading && <Spinner animation = "border" id = "loading" className='spinner'/>}
      {productos && <SearchPage theproducts = {productos}/>}
    </div>
  );
}

export default App;
