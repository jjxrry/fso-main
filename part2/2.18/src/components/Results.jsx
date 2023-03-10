import Details from './Details'
import List from './List'

const Results = ({filter, countries, handleFilter}) => {
    let resultElements = `Please specify filter`
    
    if (filter.length > 0) {
        if (countries.length === 1) {
            resultElements = `length = 1`
        }
        else if (countries.length > 10) {
            resultElements = `too many matches, please specify further`
        }
        else if (countries.length <= 10) {
            resultElements = countries.map((e) => {
                return (
                    <List
                        key={e.numericCode}
                        country={e}
                        handleFilter={handleFilter}
                    />
                )
            })
        }
    }
    return(
        <div>
            { resultElements }
        </div>
    )

}
// NEED TO APPLY THE CONDITIONAL IF PARAMETERS TO LIMIT RESULTS
// IF RESULTS = 1 THEN RETURN CAPITAL/AREA CODE

export default Results