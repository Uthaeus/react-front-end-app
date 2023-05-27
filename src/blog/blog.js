import { useOutletContext } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_BLOGS } from "./DUMMY_BLOGS";
import BlogItem from "./blog-item";
import BlogDetail from "./blog-detail";

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
                    {blog && <BlogDetail isBlogDetailHandler={isBlogDetailHandler} />}
                    {blogs.map(blog => <Link onClick={() => isBlogDetailHandler(blog)}><BlogItem key={blog.id} blog={blog} /></Link>)}
                </div>

                <div className="blog-sidebar">
                    <h4 className="categories-title">Categories</h4>
                    <div className="categories-wrapper">
                        <p className="categories-item">Post 1</p>
                    </div>

                    <h5 className="socials-title">Socials</h5>
                    <div className="socials-wrapper">
                        <p className="socials-item">Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;