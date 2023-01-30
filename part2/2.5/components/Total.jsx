const Total = ({parts}) => {
    const total = parts.reduce((sum, parts) => sum + parts.exercises, 0)
    return(
        <div>
            <p>Total number of exercises {total}</p>
        </div>
    )
}


export default Total