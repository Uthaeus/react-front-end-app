import { useOutletContext } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_BLOGS, DUMMY_CATEGORIES } from "../util/dummy_data";
import BlogItem from "./blog-item";
import BlogDetail from "./blog-detail";
import BlogSidebar from "./blog-sidebar";
import BlogForm from "./blog-form";

function Blog() {
    const [user] = useOutletContext();
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);
    const [blogDisplayList, setBlogDisplayList] = useState(blogs);
    const [categories, setCategories] = useState(DUMMY_CATEGORIES); 
    const [blog, setBlog] = useState(null); 
    const [showForm, setShowForm] = useState(false);

    function isBlogDetailHandler(b) {
        let element = document.querySelector('.blog-detail');
        element.classList.toggle('blog-detail-slide-in');

        let blogItemsElement = document.querySelector('.blog-items-list-wrapper');

        blogItemsElement.classList.toggle('blog-items-slide-down');

        setTimeout(() => {
            setBlog(b);
        }, 600);
    }

    function blogFilterHandler(category = null) {
        if (!category) {
            setBlogDisplayList(blogs);
        } else {
            setBlogDisplayList(blogs.filter(blog => blog.category === category));
        }
    }

    function toggleSignIn() {
        let element = document.querySelector('.blog-login-form-container');
        element.classList.toggle('blog-login-form-container-active');
    }

    function newBlogHandler(blog) {
        setBlogs(prevBlogs => {
            return [blog, ...prevBlogs];
        });
        setBlogDisplayList(prevBlogs => {
            return [blog, ...prevBlogs];
        });
        toggleBlogForm();
    }

    function toggleBlogForm() {
        let element = document.querySelector('.blog-form-container');
        let blogItemsElement = document.querySelector('.blog-items-list-wrapper');

        blogItemsElement.classList.toggle('blog-items-slide-down');

        element.classList.toggle('blog-form-container-active');
        setShowForm(!showForm);
    }

    return (
        <div className="blog-container">
            <div className="blog-header">
                <div className="blog-header-title-wrapper">
                    <h1 className="blog-header-title">Blog Header</h1>
                    <button onClick={user ? toggleBlogForm : toggleSignIn } className="blog-header-button">{user && showForm ? 'Close Form' : user ? 'Create Post' : 'Sign In'}</button>
                </div>

                <div className="blog-header-content-wrapper">
                    <h3 className="blog-header-welcome">Howdy {user ? user.username : 'Partner'}!</h3>
                    <p className="blog-header-subtitle">You can create a blog post after signing in, filter posts by categories listed in sidebar. Only for demonstration purposes, any new posts/users created will be gone on refresh</p>
                </div>
                
            </div>

            

            <div className="blog-content">
                <div className="blog-main">
                    <BlogForm user={user} newBlogHandler={newBlogHandler} blog={blog} />

                    <BlogDetail blog={blog} isBlogDetailHandler={isBlogDetailHandler} />

                    <div className="blog-items-list-wrapper">
                        {blogDisplayList.map(blog => <Link key={blog.id} className="blog-item-link" onClick={() => isBlogDetailHandler(blog)}><BlogItem blog={blog} /></Link>)}
                    </div>
                </div>

                <BlogSidebar categories={categories} blogFilterHandler={blogFilterHandler} />
            </div>
        </div>
    );
}

export default Blog;