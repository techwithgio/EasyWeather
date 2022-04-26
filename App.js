import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WeatherTabs } from './src/navigation/WeatherTab';
export default function App() {
  const [currentForcast, setCurrentForcast ] = useState([])

  return (
    <NavigationContainer>
      <WeatherTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
