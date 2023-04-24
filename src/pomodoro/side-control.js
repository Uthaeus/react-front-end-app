

function SideControl({type, time, handleTimeChange}) {
    let style = type === 'break' ? 'side-control break' : 'side-control session';

    function handleInc() {
        handleTimeChange(type, 'inc');
    }

    function handleDec() {
        handleTimeChange(type, 'dec');
    }

    return (
        <div className={style}>
            <h2 className='side-label'>{type.toUpperCase()}</h2>
            <div className="side-control-buttons">
                <button className="side-control-button" onClick={handleInc}><i class="bi bi-caret-up-fill"></i></button>
                <button className="side-control-button" onClick={handleDec}><i class="bi bi-caret-down-fill"></i></button>
            </div>
            <p className="side-time">{time}</p>
        </div>
    );
}

export default SideControl;