import { useOutletContext } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_BLOGS } from "./DUMMY_BLOGS";
import BlogItem from "./blog-item";
import BlogDetail from "./blog-detail";
import BlogSidebar from "./blog-sidebar";

function Blog() {
    const [user] = useOutletContext();
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);
    const [blog, setBlog] = useState(null); 

    function isBlogDetailHandler(b) {
        setBlog(b);
    }

    function newBlogHandler(blog) {
        setBlogs(prevBlogs => {
            return [blog, ...prevBlogs];
        });
    }

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-header-title">Blog Header</h1>
                <h3 className="blog-header-welcome">Howdy {user ? user.username : 'Partner'}!</h3>
                <p className="blog-header-subtitle">Feel free to share any tech related ideas.</p>
                <button disabled={!user} className="blog-header-button">{user ? 'Create Post' : 'Sign In'}</button>
            </div>

            <div className="blog-content">
                <div className="blog-main">
                    {blog && <BlogDetail blog={blog} isBlogDetailHandler={isBlogDetailHandler} />}
                    {blogs.map(blog => <Link className="blog-item-link" onClick={() => isBlogDetailHandler(blog)}><BlogItem key={blog.id} blog={blog} /></Link>)}
                </div>

                <BlogSidebar />
            </div>
        </div>
    );
}

export default Blog;