import { useEffect } from 'react';

function Pad({ clip, onClick }) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    function handleKeyPress(e) {
        if (e.keyCode === clip.keyCode) {
            playSound();
        }
    }

    function playSound() {
        const audioTag = document.getElementById(clip.keyTrigger);
        audioTag.currentTime = 0;
        audioTag.play();
        onClick(clip.keyTrigger);
    }

    return (
        <div id={clip.id} className='pad m-3' onClick={playSound}>
            <audio className='clip' src={clip.url} id={clip.keyTrigger} />
            {clip.keyTrigger}
        </div>
    );
}

export default Pad;