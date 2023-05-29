
import image from '../assets/images/login.jpg';

let fakePost = {
    id: 'blog3',
    title: 'This is a fake post by Judy',
    content: "And that correctly renders the child component, however no props are passed to the child. None of the examples provided by the React team (or anyone else for that matter) display Outlets with props, so I'm worried it's not actually a thing. Is there another way I'm not finding or am I using Output components incorrectly?",
    poster: 'Judy',
    date: '2023-04-03',
    category: 'React'
}

function FakePost() {

    return (
        <div className="fake-post-container">
            <div className='fake-post-left-column'>
                <img src={image} alt='fake post' width='100%' height='400px' />
                <h2 className='fake-post-title'>{fakePost.title}</h2>

                <div className='fake-post-details'>
                    <p className='fake-post-detail'>Category: <span className='fake-post-category'>{fakePost.category}</span></p>
                    <p className='fake-post-detail'>posted on <span className='fake-post-date'>{fakePost.date}</span> by <span className='fake-post-poster'>{fakePost.poster}</span></p>
                </div>
            </div>

            <div className='fake-post-right-column'>
                <p className='fake-post-content'>{fakePost.content}</p>
            </div>
        </div>
    );
}

export default FakePost;