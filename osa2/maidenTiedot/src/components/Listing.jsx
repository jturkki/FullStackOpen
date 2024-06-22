import {useEffect, useState} from 'react'

const Listing = ({countriesToShow, selectThis, weatherService}) => {
    
    const numberOfCountries = countriesToShow.length
    if (numberOfCountries > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    
    if (numberOfCountries > 1) {
      return (
        <div>
        {countriesToShow.map(country => 
                <p key={country.name.common}>{country.name.common}
                < button onClick={() => {selectThis(country.name.common)}}>show</button>
                </p>)}
        </div>
      )
    }
  
      if (numberOfCountries === 1) {
      const country = countriesToShow[0]
      const languageNames = Object.values(country.languages)
      const [weatherResponse, setWeatherResponse] = useState()
      console.log('nyt täällä')
      
      useEffect(() =>{
      weatherService
          .getWeather(country.capital, country.cca3)
          .then(returnedWeather => {
          setWeatherResponse(returnedWeather)
          })
        }, [country])

      
            
      if (weatherResponse === undefined) {
        return (
          <p>fetching data</p>
        )
      } else {


      console.log('weatherResponse in listing ', weatherResponse)

      const icon = `https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`

      return (
      
      <div> 
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <br />
          <h2>languages:</h2>
          <ul>
             {languageNames.map(language=> <li key={language}>{language}</li>)}
          </ul>
          <img src={country.flags.png} width="200" />
          <h2>Weather in {country.capital}</h2>
          <p>Temperature {weatherResponse.main.temp} Celsius</p>
          <img src={icon} />
          <p>wind {weatherResponse.wind.speed} m/s</p>

        </div>
      )
    }
  }
}
export default Listing