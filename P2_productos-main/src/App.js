import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import { mockdata } from './constants/products';
import CONFIG from './config/config';
import Loading from './Loading';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import NoMatch from './NoMatch';

function App() {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState(mockdata.products);

  const fetchData = async (param) => {
    if (CONFIG.use_server){
      try {
        
        let apiProductos = await fetch(CONFIG.server_url);
        apiProductos = await productosApi.json();

        if (apiProductos.status === 200){

          //console.log(apiDatos);
          setProductos(apiProductos.products);
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

  return (
    <div className="App">
      <Header />
      <Loading loading={loading} />
      <Routes>
        <Route path = "/" element = {!loading && <SearchPage theproducts = {productos} />} />
        <Route path = "/products/:productId" element = {<Product theproducts = {productos} />} />
        <Route path = "/*" element = {<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
