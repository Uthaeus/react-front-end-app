import { useState } from "react";

import Button from "./button";

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [mem, setMem] = useState([]);

    const btnArr = ['AC', 'C', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.','=',];
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let operators = ['+', '-', '*', '/'];
    let clears = ['AC', 'C'];
    let mods = ['%', '=', '.'];
    let type;

    const content = btnArr.map((btn) => {
        type = nums.includes(btn) ? 'num' : operators.includes(btn) ? 'operator' : clears.includes(btn) ? 'clear' : 'mods';

        return <Button value={btn} type={type} />
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