const Popup = ({ email, message2 }) => {
    
    return (
        <div className="container">
            <div className="w-25 h-25">
                <p>Email : {email}</p>
                <p>Message : {message2}</p>
            </div>
        </div>
    );
};

export default Popup;
