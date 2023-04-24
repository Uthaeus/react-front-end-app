import { useState } from 'react';

import SideControl from './side-control';
import DisplayControl from './display-control';

function PomodoroClock() {
    const [display, setDisplay] = useState('25:00');
    const [breakTime, setBreakTime] = useState(5);
    const [sessionTime, setSessionTime] = useState(25);

    return (
        <div className="pomodoro-clock-container">
            <div className="main-display">
                <p className='main-time'>{display}</p>
            </div>
            <div className="controls">
                <SideControl type='break' time={breakTime} />
                <DisplayControl />
                <SideControl type='session' time={sessionTime} />
            </div>
            <h1>Pomodoro Clock</h1>
        </div>
    );
}

export default PomodoroClock;