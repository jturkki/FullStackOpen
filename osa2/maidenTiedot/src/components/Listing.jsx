const Listing = ({countriesToShow, selectThis}) => {
    
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
          </div>
    )
  }
  return null
  }
export default Listing