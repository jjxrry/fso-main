const Filter = ({newFilter, handleFilter}) => {
    return(
        <div>
            <form><label>find countries </label><input value={newFilter} onChange={handleFilter}></input></form>
        </div>
    )
}

export default Filter