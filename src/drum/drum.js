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

    const drumPads = audioClips.map((clip, index) => {
        const styles = ["pad", "col", "mx-2"];

        if (index === 0 || index === 8) {
            styles.push("large-top");
        } else if (index === 1 || index === 7) {
            styles.push("large-mid-top");
        } else if (index === 2 || index === 6) {
            styles.push('mid-top');
        } else if (index === 3 || index === 5) {
            styles.push('small-top');
        }
        return <Pad key={clip.id} clip={clip} onClick={drumClickHandler} styles={styles} />
    });

    return (
        <div className="drum-machine-container">
            <h1>Drum Machine</h1>
            <div className="drum-wrapper row row-cols-9">
                {drumPads}
                
            </div>
            <div className="display">
                <p className="dis-info">press or click to play sound</p>
                <p>{display}</p>
            </div>
            <div className="actions">
                <button className='action-btn replay' onClick={replay}>Replay</button>
                <button className="action-btn reset" onClick={reset}>Reset</button>

            </div>
        </div>
    );
}

export default DrumMachine;