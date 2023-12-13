
const Filter = ({ Search, HandleSearchChange }) => {
    return (
        <div>
            filter shown with <input value={Search} onChange={HandleSearchChange} />
        </div>
    )
}

export default Filter