

function AdminCommentItem({ comment, toggleCommentBlogDetail }) {

    return (
        <div className="admin-comment-item-container">
            <p className="comment-content">{comment.content}</p>

            <div className="comment-footer">
                <p onClick={() => toggleCommentBlogDetail(comment.blog)} className="see-blog-link">see blog</p>
                <p className="comment-poster">by {comment.poster}</p>
            </div>
        </div>
    );
}

export default AdminCommentItem;