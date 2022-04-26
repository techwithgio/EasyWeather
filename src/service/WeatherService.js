import axios from 'axios'


export const WeatherCall = () => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall',  {
        params: {
            appid: '8a4df4143a2cc5f876e95ee646f1c440',
            units: 'imperial',
            lat:28.3772,
            lon:81.5707

        }
      }
      ).then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      })
}