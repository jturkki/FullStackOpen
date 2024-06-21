const Notification = ({message}) => {

    console.log('Notification message: ', message)
    

    if (message === null) {
        return null;
    }

    return (
        <div className="note">
            {message}
        </div>
    )

}
export default Notification