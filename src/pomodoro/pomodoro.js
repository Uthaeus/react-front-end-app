import { useState } from 'react';

import SideControl from './side-control';
import DisplayControl from './display-control';

function PomodoroClock() {
    const [display, setDisplay] = useState(1500);
    const [breakTime, setBreakTime] = useState(5);
    const [sessionTime, setSessionTime] = useState(25);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('session');

    function handleTimeChange(type, change) {
        if (type === 'break') {
            if (change === 'inc' && breakTime < 60) {
                setBreakTime(breakTime + 1);
            } else if (change === 'dec' && breakTime > 1) {
                setBreakTime(breakTime - 1);
            }
        } else if (type === 'session') {
            if (change === 'inc' && sessionTime < 60) {
                setSessionTime(sessionTime + 1);
            } else if (change === 'dec' && sessionTime > 1) {
                setSessionTime(sessionTime - 1);
            }
        }
    }

    const timer = () => {
        
        setInterval(() => {
            let now = new Date().getTime();
            let distance = now + 1000;
            console.log('timer');
            setDisplay((prev) => {
                if (now >= distance) {
                    if (prev - 1 === 0) {
                        if (mode === 'session') {
                            setMode('break');
                            setDisplay(breakTime * 60);
                        } else if (mode === 'break') {
                            setMode('session');
                            setDisplay(sessionTime * 60);
                        }
                    } else {
                        return prev - 1;
                    }
                }
            });
        }, 1000);
    };

    function handlePlay() {
        setIsRunning(true);
        timer();
    }

    function handlePause() {
        setIsRunning(false);
        clearInterval(timer);
    }

    function handleSwitch(m) {
        if (m === 'break' && mode === 'session') {
            setMode('break');
            setDisplay(breakTime * 60);
        } else if (m === 'session' && mode === 'break') {
            setMode('session');
            setDisplay(sessionTime * 60);
        }
    }

    function reset() {
        setDisplay(1500);
        setBreakTime(5);
        setSessionTime(25);
        setIsRunning(false);
        setMode('session');
    }

    function format(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;

        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    return (
        <div className="pomodoro-clock-container">
            <div className="main-display">
                <p className='main-time'>{format(display)}</p>
            </div>
            <div className="controls">
                <SideControl type='break' time={breakTime} handleTimeChange={handleTimeChange} />
                <DisplayControl reset={reset} handlePlay={handlePlay} handlePause={handlePause} handleSwitch={handleSwitch} />
                <SideControl type='session' time={sessionTime} handleTimeChange={handleTimeChange} />
            </div>
            
        </div>
    );
}

export default PomodoroClock;