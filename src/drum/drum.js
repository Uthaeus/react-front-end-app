import { useState } from "react";

import Pad from "./pad";
import { audioClips } from "./clips";

function DrumMachine() {
    const [display, setDisplay] = useState('');

    const drumClickHandler = (val) => {
        setDisplay(prev => prev + val + ' ');
    };

    function reset() {
        setDisplay('');
    }

    function replay() {
        const replayArr = display.trim().split(' ');
        replayArr.forEach((val, index) => {
            setTimeout(() => {
                const audioTag = document.getElementById(val);
                audioTag.currentTime = 0;
                audioTag.play();
            }, 400 * index);
        });
    }

    const drumPads = audioClips.map((clip) => {
        
        return <Pad key={clip.id} clip={clip} onClick={drumClickHandler} />
    });

    return (
        <div className="drum-machine-container">
            <h1>Drum Machine</h1>
            <div className="drum-machine-wrapper">
                <div className="drum-wrapper">
                    <div className="drums">
                        {drumPads}
                    </div>
                    
                </div>
                <div className="display-wrapper">
                    <div className="display">
                        <p className="dis-info">press or click to play sound</p>
                        <p>{display}</p>
                    </div>
                    <div className="actions">
                        <button className='action-btn' onClick={replay}>Replay</button>
                        <button className="action-btn" onClick={reset}>Reset</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;