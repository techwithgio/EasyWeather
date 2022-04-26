
import {StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';

const WeatherDisplay = ({skyImage, skyDescription, temp,min,max}) => {
  
    const weatherImagePicker = {
        "Clouds" : require('../assets/images/cloudy.jpeg'),
        "Clear" : require('../assets/images/sunny.jpeg'),
        "Snow": require('../assets/images/snow.jpeg'),
        "Rain": require('../assets/images/rain.jpeg')
      }

    return (
        <View style={styles.container}>
             <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={weatherImagePicker[skyImage]}/>
                <Text style={styles.weatherDescription}>{skyDescription ? skyDescription : ""}</Text>
              </View>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Temperature (F): </Text>
                    <Text style={{fontSize:20}}>
                      {temp ? temp  : ""}
                    </Text>
                <View style={styles.tempContainer}>
                  <View style={{flexDirection:"column", padding:5}}>
                    <Text style={{alignSelf:"center"}}>Min</Text>
                    <Text>{min ? min : ""}</Text>
                  </View>
                  <View style={{flexDirection:"column",  padding:5}}>
                    <Text style={{alignSelf:"center"}}>Max</Text>
                    <Text>{max ? max : ""}</Text>
                  </View>
                </View>
        </View>
    )
}

export default WeatherDisplay

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    imageContainer: {
      marginBottom: 20, 
      alignItems:"center"
    },
    imageStyle: {
      height:180,
      width:220
    },
    weatherDescription: {
      fontSize: 25,
      fontWeight: "bold"
    },
    tempContainer: {
      flexDirection:"row",
      justifyContent: "space-between",
      alignContent:"space-between",
      width:'30%',
      padding:10
    }
  });