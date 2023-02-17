const List = ({country, handleFilter}) => {
    console.log(country)
    return(
        <li>
            {country.name.official}
            <button value={country.name} onClick={handleFilter}>show</button>
        </li>
    )
}

export default List