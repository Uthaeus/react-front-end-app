

function Calculator() {

    const btnArr = ['AC', 'C', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.','=',];

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>

            <div className="calculator">
                <div className="display">

                </div>
                <div className="buttons">

                </div>
            </div>
        </div>
    );
}

export default Calculator;