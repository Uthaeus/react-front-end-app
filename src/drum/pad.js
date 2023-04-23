

function Pad({ drum, onClick, styles }) {

    return (
        <div className={styles.join(' ')} onClick={onClick}>
            {drum}
        </div>
    );
}

export default Pad;