
const Error = ({ ErrorMessage }) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }


    if (ErrorMessage === '') {
        return ''
    }

    return (
        <div style={errorStyle}>
            {ErrorMessage}
        </div>
    )
}

export default Error