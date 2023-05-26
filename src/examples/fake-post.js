import image from '../assets/images/space-main1.jpg';

function FakePost() {
    return (
        <div className="fake-post-container">
            <div className="fake-post-left-column">
                <h2 className='fake-post-title'>How to run functions after css animation ends</h2>
                <p className='fake-post-body'>I looked into this tutorial to answer your query below.

Basically, you need to specify a type of JavaScript handler, animationend, using an eventhandler add function, passing the method you wish to run in as the second argument, and setting the element you are animating as the element to add the event to.</p>
            </div>

            <div className="fake-post-right-column">
                <div className="fake-post-img-wrapper">
                    <img src={image} alt="post" width='100%' height='300px' />
                </div>
            </div>
        </div>
    );
}

export default FakePost;