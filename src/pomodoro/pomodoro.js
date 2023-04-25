import { useState, useEffect } from 'react';

import SideControl from './side-control';
import DisplayControl from './display-control';

function PomodoroClock() {
    const [display, setDisplay] = useState(1500);
    const [breakTime, setBreakTime] = useState(5);
    const [sessionTime, setSessionTime] = useState(25);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState('session');
    let interval;

    function handleTimeChange(type, change) {
        if (type === 'break') {
            if (change === 'inc' && breakTime < 60) {
                setBreakTime(breakTime + 1);
                if (mode === 'break') {
                    setDisplay((breakTime + 1) * 60);
                }
            } else if (change === 'dec' && breakTime > 1) {
                setBreakTime(breakTime - 1);
                if (mode === 'break') {
                    setDisplay((breakTime - 1) * 60);
                }
            }
        } else if (type === 'session') {
            if (change === 'inc' && sessionTime < 60) {
                setSessionTime(sessionTime + 1);
                if (mode === 'session') {
                    setDisplay((sessionTime + 1) * 60);
                }
            } else if (change === 'dec' && sessionTime > 1) {
                setSessionTime(sessionTime - 1);
                if (mode === 'session') {
                    setDisplay((sessionTime - 1) * 60);
                }
            }
        }
    }

    const timer = (input) => {
        let seconds = 1000;
        let now = new Date().getTime();
        let distance = now + seconds;
        let currentMode = mode;

        if (!isRunning) {
            interval = setInterval(() => {
                now = new Date().getTime();
                
                if (now > distance) {
                    setDisplay((prev) => {
                        if (prev <= 0 && currentMode === 'session') {
                            setMode('break');
                            return breakTime * 60;
                        } else if (prev <= 0 && currentMode === 'break') {
                            setMode('session');
                            return sessionTime * 60;
                        }
                        return prev - 1;
                    });
                    distance += seconds;
                }
            }, 400);
            localStorage.setItem('interval-id', interval);
        }
        if (isRunning) {
            clearInterval(localStorage.getItem('interval-id'));
        }
        setIsRunning(input);
    };

    function handlePlay() {
        if (!isRunning) {
            timer(true);
        }
    }

    function handlePause() {
        if (isRunning) {
            timer(false);
        }
    }

    function handleSwitch(m) {
        if (m !== mode) {
            clearInterval(localStorage.getItem('interval-id'));
            setIsRunning(false);
        }
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
        clearInterval(localStorage.getItem('interval-id'));
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