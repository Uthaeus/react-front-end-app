

function DisplayControl({ reset, handlePlay, handlePause, handleSwitch }) {

    return (
        <div className="display-control">
            <div className='play-buttons'>
                <button className="play button-base" onClick={handlePlay}><i class="bi bi-play-fill"></i></button>
                <button className="pause button-base" onClick={handlePause}><i class="bi bi-pause-fill"></i></button>
                <button className='reset button-base' onClick={reset}><i class="bi bi-arrow-counterclockwise"></i></button>
            </div>
            <div className='switch-buttons'>
                <button className='switch-button' onClick={() => handleSwitch('break')}><i class="bi bi-arrow-return-left"></i></button>
                <button className='switch-button' onClick={() => handleSwitch('session')}><i class="bi bi-arrow-return-right"></i></button>
            </div>
            <h1 className="my-2">Pomodoro Clock</h1>
        </div>
    );
}

export default DisplayControl;