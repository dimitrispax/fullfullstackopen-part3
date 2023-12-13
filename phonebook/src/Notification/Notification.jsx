
const Notification = ({ Message }) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }


    if (Message === '') {
        return ''
    }

    return (
        <div style={notificationStyle}>
            {Message}
        </div>
    )
}

export default Notification