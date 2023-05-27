import { NavLink } from "react-router-dom";

function BlogNavigation() {

    return (
        <div className="blog-navigation">
            <div className="blog-navigation-header">
                <h1>Blog Header</h1>
            </div>

            <div className="blog-navigation-links">
                <NavLink to='/' end className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Home</NavLink>
                <NavLink to='/calculator' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Calculator</NavLink>
                <NavLink to='/quote' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Quote</NavLink>
                <NavLink to='/drum' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Drum</NavLink>
                <NavLink to='/pomodoro' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Pomodoro</NavLink>
                <NavLink to='/markdown' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Markdown</NavLink>
                <NavLink to='/example-form' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Form</NavLink>
                <NavLink to='/css-examples' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>CSS</NavLink>
                <NavLink to='/comment-example' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Comment</NavLink>
                <NavLink to='/blog' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Blog</NavLink>
            </div>

            <div className="blog-navigation-auth-links">
                <NavLink to='/login' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Register</NavLink>

                <NavLink to='/logout' className={({ isActive }) => ({ isActive } ? "blog-link link-active" : "blog-link")}>Logout</NavLink>
            </div>
        </div>
    );
}

export default BlogNavigation;