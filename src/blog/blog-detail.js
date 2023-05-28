
function BlogDetail({ blog, isBlogDetailHandler }) {

    function distanceInTime(date) {
        let now = new Date();
        let blogDate = new Date(date);

        let distance = now.getTime() - blogDate.getTime();
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));

        return days;
    }

    return (
        <div className="blog-detail">
            <h1 className="blog-detail-title">{blog.title}</h1>
            <p className="blog-detail-content">{blog.content}</p>

            <div className="blog-detail-footer">
                <p className="blog-detail-poster">posted by <span className="blog-poster-name">{blog.poster}</span> <span className="blog-poster-date">{distanceInTime(blog.date)} days ago.</span></p>

                <p onClick={() => isBlogDetailHandler(null)} className="blog-detail-back">Close</p>
            </div>
        </div>
    );
}

export default BlogDetail;