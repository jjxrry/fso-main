import { useEffect, useState } from 'react'
import './index.css'
import apiRequest from './services/apiRequest'
import Filter from './components/Form'
import Results from './components/Results'


const App = () => {
    const [newFilter, setNewFilter] = useState('')
    const [results, setResults] = useState([])

    const filteredCountries = newFilter.length === 0 ? results : results.filter(country => country.name.official.toLowerCase().indexOf(newFilter) >= 0)

    useEffect(() => {
        apiRequest
        .getAll()
        .then(returnCountries => {
            setResults(returnCountries)
        })
        }, [])
        
        const handleFilter = (e) => {
        setNewFilter(e.target.value.toLowerCase())
        }

    return (
        <div>
        <Filter handleFilter={(e) => { handleFilter(e) }}/>
        <Results 
            filter={newFilter}
            countries={filteredCountries}
            handleFilter={(e) => { handleFilter(e) }}
        />
        </div>
    )
}

export default App