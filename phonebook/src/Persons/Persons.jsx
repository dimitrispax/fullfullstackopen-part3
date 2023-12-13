
const Persons = ({ Persons, HandleDelete }) => {

    return (
        <>
            {
                Persons.map((person) => {
                    return (
                        <div key={person.id}>
                            <p>{person.name} {person.number}</p>
                            <button onClick={() => HandleDelete(person.id, person.name)}>delete</button>
                        </div >
                    )
                })
            }
        </>
    )
}

export default Persons