import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Listing from './components/Listing'
import weatherService from './components/Weather'


function App() {
  const [filter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [country, setCountry] = useState('')
  

  
  
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all/`)
      .then(response => {
        
        setAllCountries(response.data.filter((country) => country.name.common))
      })
  }, [])

  
  const countriesToShow = allCountries.filter
      (country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  
  const selectThis = commonName => {
    console.log('select this country ', commonName)
    setFilter(commonName)
  }

  
  console.log('countriesToShow.length', countriesToShow.length)
  

  const handleFilterChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setFilter(event.target.value)    
  }

  return (
    <div>
      <Filter filter={filter}
              handleFilterChange = {handleFilterChange} />

      <Listing countriesToShow={countriesToShow}
               selectThis={selectThis}
               weatherService= {weatherService} />
      
    
    </div>
  
  )
}

export default App
