

function Blog() {

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Blog</h1>
            </div>

            <div className="blog-content">
                <div className="blog-main">
                    posts here 
                </div>

                <div className="blog-sidebar">
                    <h4>Categories</h4>
                    <div>
                        <p>Post 1</p>
                    </div>

                    <h5>Socials</h5>
                    <div>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;