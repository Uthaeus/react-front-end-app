
function AdminUserDetail({ user, blogs, comments, userDisplayHandler}) {
    return (
        <div className="admin-user-detail-container">
            <h1>{user?.name}</h1>
            <button onClick={() => userDisplayHandler(null)}>Close</button>

            <div className="admin-user-blogs-wrapper">
                <h2>Blogs</h2>
                {blogs.map(blog => <p key={blog.id}>{blog.title}</p>)}
            </div>

            <div className="admin-user-comments-wrapper">
                <h2>Comments</h2>
                {comments.map(comment => <p key={comment.id}>{comment.content}</p>)}
            </div>
        </div>
    );
}

export default AdminUserDetail;