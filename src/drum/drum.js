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
    const styles = ["pad col mx-2"];

    const drumPads = drums.map((drum, index) => {
        if (index === 0 || index === 8) {
            styles.push("large-top");
        } else if (index === 1 || index === 7) {
            styles.push("large-mid-top");
        } else if (index === 2 || index === 6) {
            styles.push('mid-top');
        } else if (index === 3 || index === 5) {
            styles.push('small-top');
        }
        return <Pad key={drum} drum={drum} onClick={drumClickHandler} styles={styles} />
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