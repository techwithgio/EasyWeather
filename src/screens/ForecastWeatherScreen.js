import React, {useState, useEffect} from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import WeatherModal from '../components/util/WeatherModal'
import WeatherDisplay from '../components/WeatherDisplay'
import {APP_ID, FORECAST_API_URL} from "@env"

const ForecastWeatherScreen = () => {
    const [currentForcast, setCurrentForcast ] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading ] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [foreCastItem, setForeCastItem] = useState([])
    const [coordinates, setCoordinates] = useState({
      longitude: 89.3985,
      latitude: 40.6331
    })

    useEffect(() => {
      getForecast()
    }, [])
  
   const getForecast = () => {
      axios.get(FORECAST_API_URL,  {
        params: {
            appid: APP_ID,
            units: 'imperial',
            lat: coordinates.latitude,
            lon: coordinates.longitude,
            exclude:'current',
        }
      }
      ).then(function (response) {
        console.log(response.data.daily[0])  
        setCurrentForcast(response.data.daily)
        // setForeCastItem( response.data.daily[0])
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      })
   }
   const onRefresh = () => {
    setRefreshing(true);
    getForecast()
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const WeatherItem = ({item}) => (
    <TouchableOpacity style={styles.item} 
        onPress={() => {
          setForeCastItem(item)
          setModalVisible(!modalVisible)}} >
        {/* Date converts value that are in Milliseconds so we have to convert seconds to milli by multiplying by 1000  */}
        <Text style={{fontSize: 15, fontWeight:"bold"}}>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
        <Text style={{fontWeight:"600"}}>{item.weather[0].description}</Text>
        <Text >{item.temp.day}</Text>
    </TouchableOpacity>
    );

   const renderItem = ({ item }) => {
        return  ( <WeatherItem item={item} />)
   };

    return (
        <View style={styles.container}>
          <Text style={styles.header}>The Next 8 Days.....</Text>
            <FlatList
                 refreshControl={
                    <RefreshControl 
                      refreshing={refreshing} 
                      onRefresh={onRefresh} 
                    />
                }
                contentContainerStyle={{flexGrow: 1}}
                data={currentForcast}
                renderItem={renderItem}
                keyExtractor={item => item.dt}   
            />
          { foreCastItem.length == 0 ? null :
            <WeatherModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
              <WeatherDisplay
                skyImage={foreCastItem.weather[0].main}
                skyDescription={foreCastItem.weather[0].description}
                temp = {foreCastItem.temp.day} 
                min = {foreCastItem.temp.min}
                max = {foreCastItem.temp.max}
              />
            </WeatherModal>
          } 
        </View>
    )
}

export default ForecastWeatherScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    header: {
      fontSize:20, 
      fontWeight:"bold", 
      justifyContent:"center", 
      alignSelf:"center",
      padding:10
    },
    item: {
      padding: 10,
      fontSize: 18,
      margin: 5,
      borderWidth: 1,
      borderRadius: 5
    },
  });
