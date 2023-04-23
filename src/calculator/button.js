

function Button({ value, type }) {

    const style = value === 0 ? 'zero-btn btn-wrapper col' : 'num-btn btn-wrapper col'

    return (
        <div className={style}>
            {value}
        </div>
    );
}

export default Button;