
function AdminBlogDetail({blog, toggleBlogDetail}) {

    return (
        <div className="admin-blog-detail-container">
            <h1 className="blog-detail-title">{blog?.title}</h1>
            <p className="blog-detail-content">{blog?.content}</p>
            <p className="blog-detail-poster">posted by {blog?.poster}</p>

            <button onClick={() => toggleBlogDetail(null)} className="blog-detail-btn">Close Detail</button>
        </div>
    );
}

export default AdminBlogDetail;