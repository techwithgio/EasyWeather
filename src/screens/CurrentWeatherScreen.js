import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, Text, View , Image} from 'react-native';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from '../components/WeatherDisplay';
import {APP_ID, CURRENT_API_URL} from "@env"

export default function CurrentWeatherScreen() {

  const [currentForcast, setCurrentForcast ] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading ] = useState(true)
  const [coordinates, setCoordinates] = useState({
    longitude: 89.3985,
    latitude: 40.6331
  })
  useEffect(() => {
    getWeather()
  }, [])

 const getWeather = () => {
    axios.get(CURRENT_API_URL,  {
      params: {
          appid: APP_ID,
          units: 'imperial',
          lat: coordinates.latitude,
          lon: coordinates.longitude 

      }
    }
    ).then(function (response) {
      setCurrentForcast(response)
      setLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    })
 }
 const onRefresh = () => {
    setRefreshing(true);
    getWeather()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
   
        <ScrollView 
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh} 
                />
            }
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
           >
              {
                loading ? <ActivityIndicator/> : 
                <WeatherDisplay 
                  skyImage={currentForcast.data.current.weather[0].main}
                  skyDescription={ currentForcast.data.current.weather[0].description}
                  temp = {currentForcast.data.current.temp} 
                  min = {currentForcast.data.daily[0].temp.min}
                  max = {currentForcast.data.daily[0].temp.max}
                />
              }  
        </ScrollView>
  );
}


