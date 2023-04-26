

function SideControl({type, time, handleTimeChange}) {

    function handleInc() {
        handleTimeChange(type, 'inc');
    }

    function handleDec() {
        handleTimeChange(type, 'dec');
    }

    return (
        <div className='side-control'>
            <h2 className='side-label'>{type.toUpperCase()}</h2>
            <div className="side-control-buttons">
                <button className="side-control-button" onClick={handleInc}><i className="bi bi-caret-up-fill"></i></button>
                <button className="side-control-button" onClick={handleDec}><i className="bi bi-caret-down-fill"></i></button>
            </div>
            <p className="side-time">{time}</p>
        </div>
    );
}

export default SideControl;