import { useState } from "react";

import AdminBlogItem from "./admin-blog-item";
import AdminCommentItem from "./admin-comment-item";
import AdminBlogDetail from "./admin-blog-detail";


function AdminUserDetail({ user, blogs, comments, userDisplayHandler}) {
    const [blog, setBlog] = useState(null);

    function toggleBlogDetail(blog) {
        setBlog(blog);

        let element = document.querySelector('.admin-blog-detail-container');
        element.classList.toggle('admin-blog-detail-container-slide-in');
    }
    

    return (
        <div className="admin-user-detail-container">
            <div className="admin-user-detail-info-wrapper">
                <div>
                    <h1 className="info-wrapper-title">{user?.name}</h1>
                    <p className="info-wrapper-email">email: {user?.email}</p>
                    <p className="info-wrapper-role">role: {user?.role}</p>
                </div>
                <button className="info-wrapper-btn" onClick={() => userDisplayHandler(null)}>Close Detail</button>
            </div>

            <div className="admin-user-blogs-wrapper">
                <h2 className="user-blogs-title">{user?.name}'s Blogs</h2>
                {blogs.map(blog => <AdminBlogItem key={blog.id} blog={blog} toggleBlogDetail={toggleBlogDetail} />)}
            </div>

            <div className="admin-user-comments-wrapper">
                <AdminBlogDetail blog={blog} toggleBlogDetail={toggleBlogDetail} />
                
                <h2 className="user-comments-title">{user?.name}'s Comments</h2>
                {comments.map(comment => <AdminCommentItem key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
}

export default AdminUserDetail;