import { useOutletContext } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_BLOGS, DUMMY_CATEGORIES } from "./dummy_data";
import BlogItem from "./blog-item";
import BlogDetail from "./blog-detail";
import BlogSidebar from "./blog-sidebar";
import BlogForm from "./blog-form";

function Blog() {
    const [user] = useOutletContext();
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);
    const [categories, setCategories] = useState(DUMMY_CATEGORIES); 
    const [blog, setBlog] = useState(null); 
    const [showForm, setShowForm] = useState(false);

    function isBlogDetailHandler(b) {
        console.log('Blog Detail Handler', b);
        if (b) {
            setBlog(b);
        } else {
            setBlog(null);
        }
    }

    function blogFilterHandler(category) {
        setBlogs(blogs => {
            let filteredBlogs = blogs.filter(blog => blog.category === category);
            return filteredBlogs;
        });
    }

    function toggleSignIn() {
        let element = document.querySelector('.blog-login-form-container');
        element.classList.toggle('blog-login-form-container-active');
    }

    function newBlogHandler(blog) {
        setBlogs(prevBlogs => {
            return [blog, ...prevBlogs];
        });
        toggleBlogForm();
    }

    function toggleBlogForm() {
        let element = document.querySelector('.blog-form-container');
        let blogItemsElement = document.querySelector('.blog-item-link').firstChild;

        setTimeout(() => {

            blogItemsElement.classList.toggle('blog-items-top-margin');
        }, 350);

        element.classList.toggle('blog-form-container-active');
        setShowForm(!showForm);
    }

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-header-title">Blog Header</h1>
                <h3 className="blog-header-welcome">Howdy {user ? user.username : 'Partner'}!</h3>
                <p className="blog-header-subtitle">Feel free to share any tech related ideas.</p>
                <button onClick={user ? toggleBlogForm : toggleSignIn } className="blog-header-button">{user && showForm ? 'Close Form' : user ? 'Create Post' : 'Sign In'}</button>
            </div>

            

            <div className="blog-content">
                <div className="blog-main">
                    <BlogForm user={user} newBlogHandler={newBlogHandler} blog={blog} />

                    {blog && <BlogDetail blog={blog} isBlogDetailHandler={isBlogDetailHandler} />}

                    {blogs.map(blog => <Link key={blog.id} className="blog-item-link" onClick={() => isBlogDetailHandler(blog)}><BlogItem blog={blog} /></Link>)}
                </div>

                <BlogSidebar categories={categories} blogFilterHandler={blogFilterHandler} />
            </div>
        </div>
    );
}

export default Blog;