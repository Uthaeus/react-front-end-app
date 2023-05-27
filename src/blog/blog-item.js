

function BlogItem({ blog }) {

    function truncateContent(content) {
        const MAX_LENGTH = 100;
        return content.length > MAX_LENGTH ? content.substring(0, MAX_LENGTH) + '...' : content;
    }

    function distanceInTime(date) {
        const now = new Date();
        const postDate = new Date(date);
        const distance = now - postDate;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        return days > 0 ? `${days} days` : `${hours} hours`;
    }

    return (
        <div className="blog-item">
            <div className="blog-item-header">
                <h3 className="blog-item-title">{blog.title}</h3>
                <p className="blog-item-poster">Posted By {blog.poster} {distanceInTime(blog.date)} ago.</p>
            </div>
            <p className="blog-item-subtitle">{truncateContent(blog.content)}</p>
        </div>
    );
}

export default BlogItem;