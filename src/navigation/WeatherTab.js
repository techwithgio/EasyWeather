import CurrentWeatherScreen from "../screens/CurrentWeatherScreen"
import ForecastWeatherScreen from "../screens/ForecastWeatherScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export const WeatherTabs = ()  => {
  return(  <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Current Weather') {
            iconName = 'weather-cloudy';
          } else if (route.name === 'Forecast Weather') {
            iconName = 'weather-partly-cloudy' 
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Current Weather" component={CurrentWeatherScreen} />
        <Tab.Screen name="Forecast Weather" component={ForecastWeatherScreen} />
  </Tab.Navigator>)

}