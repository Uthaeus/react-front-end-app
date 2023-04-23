

function Pad({ drum, onClick }) {

    return (
        <div className="pad col m-2" onClick={onClick}>
            {drum}
        </div>
    );
}

export default Pad;