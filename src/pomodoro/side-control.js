

function SideControl({type, time}) {
    let style = type === 'break' ? 'side-control break' : 'side-control session';

    return (
        <div className={style}>
            <h2 className='side-label'>{type.toUpperCase()}</h2>
            <div className="side-control-buttons">

            </div>
            <p className="side-time">{time}</p>
        </div>
    );
}

export default SideControl;