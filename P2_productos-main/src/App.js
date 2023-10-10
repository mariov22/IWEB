import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import { mockdata } from './constants/products';
import CONFIG from './config/config';
import Loading from './Loading';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';

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
          setProductos(productosApi.products);
        } else{
          setProductos(null);
        }

      } catch (error){
        setProductos(null);
        console.log(error);
      }
    } else {
        setProductos(mockdata.products);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },CONFIG.loading_timeout_ms)
  },[])

  useEffect(() => {
    fetchData();
  },[])

  /*<Routes>
    <Route path = "/" element={productos && <SearchPage theproducts = {productos} />} />
    <Route path = "/products/:productId" element = {<Product theproducts = {productos} />} />
  </Routes>*/

  return (
    <div className="App">
      <Header />
      <Loading loading={loading} />
      {/*!loading && <SearchPage theproducts = {productos} />*/}
    </div>
  );
}

export default App;
