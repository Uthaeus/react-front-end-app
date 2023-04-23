import { useState } from "react";

import Button from "./button";

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [mem, setMem] = useState([]);
    const [flag, setFlag] = useState(false);

    const btnArr = ['AC', 'C', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.','=',];
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let operators = ['+', '-', '*', '/'];
    let clears = ['AC', 'C'];
    let mods = ['%', '=', '.'];
    
    let func;

    const numChangeHander = (e) => {
        if (display === '0' || flag) {
            setDisplay(e.target.innerHTML);
            setFlag(false);
        }  else {
            setDisplay(display + e.target.innerHTML);
        }
    };

    const operatorChangeHandler = (e) => {
        setMem([...mem, display, e.target.innerHTML]);
        if (mem.length > 3) {
            equalHandler();
        }
        setFlag(true);
    };

    const equalHandler = () => {
        setMem(() => [...mem, display]);
        if (mem.length >= 2) {
            let func = [...mem, display].join('');
            let result = Function(`return ${func}`)();
            setDisplay(result);
            setFlag(true);
        }
    };

    const modHandler = (e) => {
        if (e.target.innerHTML === '%') {
            setDisplay(display / 100);
        } else if (e.target.innerHTML === '.') {
            setDisplay(display + '.');
        } else {
            equalHandler();
        }
    };

    const clearHandler = (e) => {
        if (e.target.innerHTML === 'AC') {
            setMem([]);
        } 
        setDisplay('0');
    };

    const content = btnArr.map((btn) => {
        let styles = ['btn-wrapper', 'col'];
        if (nums.includes(btn)) {
            if (btn === 0) {
                styles.push('zero-btn');
            } else {
                styles.push('num-btn');
            }
            func = numChangeHander;
        } else if (operators.includes(btn)) { 
            styles.push('operator-btn');
            func = operatorChangeHandler;
        } else if (mods.includes(btn)) {
            if (btn === '=') {
                styles.push('equal-btn');
                func = equalHandler;
            } else {
                styles.push('mod-btn');
                func = modHandler;
            }
        } else {
            styles.push('clear-btn');
            func = clearHandler;
        }

        return <Button key={btn} value={btn} styles={styles.join(' ')} onClick={func} />
    });

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>

            <div className="calculator">
                <div className="display">
                    {display}
                </div>
                <div className="buttons row row-cols-4">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Calculator;