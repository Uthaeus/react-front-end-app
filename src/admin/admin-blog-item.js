
function AdminBlogItem({ blog, toggleBlogDetail }) {

    function truncateContent(content) {
        if (content.length > 80) {
            return content.slice(0, 80) + '...'
        } else {
            return content
        }
    }

    return (
        <div onClick={() => toggleBlogDetail(blog)} className="admin-blog-item-container">
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-content">{truncateContent(blog.content)}</p>
            <p className="blog-item-details">posted by <span className="blog-item-poster">{blog.poster}</span> on <span className="blog-item-date">{blog.date}</span></p>
        </div>
    );
}

export default AdminBlogItem;