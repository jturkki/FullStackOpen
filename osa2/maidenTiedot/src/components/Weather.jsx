import axios from 'axios'


const api_key = import.meta.env.VITE_OW_KEY

const getWeather = (capital, cca3) => {

   const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital},${cca3.toLowerCase()}&units=metric&APPID=${api_key}`)
            
    return request.then(response => response.data)
    
}
export default {getWeather}