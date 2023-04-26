import { useEffect } from 'react';

function Pad({ clip, onClick }) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        const pads = document.querySelectorAll('.pad');
        pads.forEach(pad => {
            pad.addEventListener('transitionend', () => {
                pad.classList.remove('playing');
            });
        });
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    function handleKeyPress(e) {
        if (e.keyCode === clip.keyCode) {
            playSound();
        }
    }

    function playSound(e) {
        const key = document.getElementById(clip.id);
        const audioTag = document.getElementById(clip.keyTrigger);
        key.classList.add('playing');
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