
const PersonForm = ({ AddName, HandleNameChange, HandlePhoneChange, NewName, NewPhoneNumber }) => {
    return (
        <form onSubmit={AddName}>
            <div>
                name: <input value={NewName} onChange={HandleNameChange} />
            </div>
            <div>number: <input value={NewPhoneNumber} onChange={HandlePhoneChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm