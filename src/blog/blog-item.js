import { Link } from "react-router-dom";

function BlogItem({ blog }) {

    function truncateContent(content) {
        const MAX_LENGTH = 100;
        return content.length > MAX_LENGTH ? content.substring(0, MAX_LENGTH) + '...' : content;
    }

    return (
        <div className="blog-item">
            <div className="blog-item-header">
                <h3 className="blog-item-title">{blog.title}</h3>
                <p className="blog-item-poster">Posted By {blog.poster}</p>
            </div>
            <p className="blog-item-subtitle">{truncateContent(blog.content)}</p>
        </div>
    );
}

export default BlogItem;