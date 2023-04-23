import { useEffect, useState } from "react";

import Pad from "./pad";

function DrumMachine() {
    const [display, setDisplay] = useState('Click or press a key to play a sound');
    const [drumArr, setDrumArr] = useState([]);

    function playSound() {}

    const drumClickHandler = (e) => {
        setDrumArr([...drumArr, e.target.innerText]);
        playSound()
    };

    const handleKeyDown = (e) => {

    };

    const drums = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const drumPads = drums.map((drum, index) => {
        return <Pad key={drum} drum={drum} onClick={drumClickHandler} />
    });

    return (
        <div className="drum-machine-container">
            <h1>Drum Machine</h1>
            <div className="drum-wrapper row row-cols-9">
                {drumPads}
                
            </div>
            <div className="display">
                <p>{display}</p>
            </div>
        </div>
    );
}

export default DrumMachine;