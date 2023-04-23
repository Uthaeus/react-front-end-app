

function Button({ value, styles, onClick }) {

    

    return (
        <div className={styles} onClick={onClick}>
            {value}
        </div>
    );
}

export default Button;