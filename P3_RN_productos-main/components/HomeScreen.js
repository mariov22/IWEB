import React from "react";
import { View } from "react-native";
import Header from './components/Header';
import { useState, useEffect } from 'react';
import CONFIG from './components/config/config';
import { mockdata } from './components/constants/products';
import Loading from './components/Loading';
import SearchPage from './components/SearchPage';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Producto from "./Producto";

export default function HomeScreen(props){

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState(mockdata.products);
    const Stack = createStackNavigator();

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        },CONFIG.loading_timeout_ms)
      },[])

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
        fetchData();
    },[])

    return(
        <View testID="home">
            <Header />
            <Loading loading = {loading} />
            {!loading && <SearchPage theproducts = {productos} />} 
            <StatusBar style="auto" />
        </View>
    );
}