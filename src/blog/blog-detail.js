
function BlogDetail({ blog, isBlogDetailHandler }) {

    return (
        <div className="blog-detail">
            <h1 className="blog-detail-title">{blog.title}</h1>
            <p className="blog-detail-content">{blog.content}</p>

            <div className="blog-detail-footer">
                <p className="blog-detail-poster">Posted By {blog.poster}</p>

                <p className="blog-detail-date">{blog.date}</p>

                <p onClick={() => isBlogDetailHandler(null)} className="blog-detail-back">Close</p>
            </div>
        </div>
    );
}

export default BlogDetail;