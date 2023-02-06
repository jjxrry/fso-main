import { useEffect, useState } from 'react'
import './index.css'
import apiRequest from './services/apiRequest'
import Filter from './components/Form'
import Results from './components/Results'


const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    apiRequest
      .getAll()
      .then(returnCountries => {
        setResults(returnCountries)
      })
    }, [])
    
    const handleFilter = (event) => {
      setNewFilter(event.target.value)
    }

  // const listOfNames = results.map(country => 
  //   country.name.official);

  // const countryInfo = results.map(country => 
  //   country)


  return (
    <div>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      {results.filter(cinfo => cinfo.name.official.toLowerCase().includes(newFilter)).map(info =>
      <Results 
      key={info.id} 
      countryNames={info.name} 
      countryInfo={info}
      />
        )}
    </div>
  )
}

export default App