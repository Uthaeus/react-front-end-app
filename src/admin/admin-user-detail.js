
import AdminBlogItem from "./admin-blog-item";
import AdminCommentItem from "./admin-comment-item";


function AdminUserDetail({ user, blogs, comments, userDisplayHandler}) {

    function toggleBlogDetail(blog) {}
    

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
                <h2 className="user-comments-title">{user?.name}'s Comments</h2>
                {comments.map(comment => <AdminCommentItem key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
}

export default AdminUserDetail;