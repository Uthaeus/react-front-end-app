

function DisplayControl({ reset, handlePlay, handlePause, handleSwitch }) {

    return (
        <div className="display-control">
            <div className='play-buttons'>
                <button className="play button-base" onClick={handlePlay}><i className="bi bi-play-fill"></i></button>
                <button className="pause button-base" onClick={handlePause}><i className="bi bi-pause-fill"></i></button>
                <button className='reset button-base' onClick={reset}><i className="bi bi-arrow-counterclockwise"></i></button>
            </div>
            <div className='switch-buttons'>
                <button className='switch-button button-base' onClick={() => handleSwitch('break')}><i className="bi bi-arrow-return-left"></i></button>
                <button className='switch-button button-base' onClick={() => handleSwitch('session')}><i className="bi bi-arrow-return-right"></i></button>
            </div>
            <h1 className="my-5">Pomodoro Clock</h1>
        </div>
    );
}

export default DisplayControl;