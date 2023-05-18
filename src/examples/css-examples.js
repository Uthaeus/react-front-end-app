

function CssExamples() {

    function fadeInHandler() {
        console.log('fade in');
        const title = document.querySelector('.title-fade-in');
        title.classList.remove('fade-in');
        void title.offsetWidth;
        title.classList.add('fade-in');
    }

    function fadeInOutHandler() {
        const title = document.querySelector('.title-fade-in-out');
        title.classList.remove('fade-in-out');
        void title.offsetWidth;
        title.classList.add('fade-in-out');
    }

    function slideInHandler() {
        const title = document.querySelector('.title-slide-in');
        title.classList.remove('slide-in');
        void title.offsetWidth;
        title.classList.add('slide-in');
    }

    function slideInOutHandler() {
        const title = document.querySelector('.title-slide-in-out');
        title.classList.remove('slide-in-out');
        void title.offsetWidth;
        title.classList.add('slide-in-out');
    }

    function floatDownHandler() {
        const title = document.querySelector('.title-float-down');
        title.classList.remove('float-down');
        void title.offsetWidth;
        title.classList.add('float-down');
    }

    function floatDownOutHandler() {
        const title = document.querySelector('.title-float-down-out');
        title.classList.remove('float-down-out');
        void title.offsetWidth;
        title.classList.add('float-down-out');
    }

    return (
        <div className="css-examples-container">
            <h1 className="css-examples-title">CSS Examples</h1>

            <div className="css-examples-content">
                <h2 className="title-fade-in">Example Title</h2>
                <button className="content-btn" onClick={fadeInHandler}>Fade In Animation</button>
            </div>

            <div className="css-examples-content">
                <h2 className="title-fade-in-out">Example Title</h2>
                <button className="content-btn" onClick={fadeInOutHandler}>Fade In/Out Animation</button>
            </div>

            <div className="css-examples-content">
                <h2 className="title-slide-in">Example Title</h2>
                <button className="content-btn" onClick={slideInHandler}>Slide In Animation</button>
            </div>

            <div className="css-examples-content">
                <h2 className="title-slide-in-out">Example Title</h2>
                <button className="content-btn" onClick={slideInOutHandler}>Slide In/Out Animation</button>
            </div>

            <div className="css-examples-content">
                <h2 className="title-float-down">Example Title</h2>
                <button className="content-btn" onClick={floatDownHandler}>Float Down Animation</button>
            </div>

            <div className="css-examples-content">
                <h2 className="title-float-down-out">Example Title</h2>
                <button className="content-btn" onClick={floatDownOutHandler}>Float Down/Out Animation</button>
            </div>
        </div>
    );
}

export default CssExamples;