const Results = ({countryNames, countryInfo}) => {

    // if(size > 10) {
    //     return('Too many matches, specify another filter')
    // }

    return(
        <div>
            <ul>
                <li>{countryNames.common}</li>
            </ul>
        </div>
    )

}
// NEED TO APPLY THE CONDITIONAL IF PARAMETERS TO LIMIT RESULTS
// IF RESULTS = 1 THEN RETURN CAPITAL/AREA CODE

export default Results