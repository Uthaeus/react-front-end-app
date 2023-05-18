

function Notice({message}) {
    function noticeCloseHandler() {
        document.querySelector('.notice').style.display = 'none';
    }
    
    return (
        <div className="notice">
            <p className="notice-message">{message}</p>
            <button className="notice-btn" onClick={noticeCloseHandler}>X</button>
        </div>
    );
}

export default Notice;