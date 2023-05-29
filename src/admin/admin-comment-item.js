

function AdminCommentItem({ comment }) {

    return (
        <div className="admin-comment-item-container">
            <h2>{comment.title}</h2>
            <p>{comment.content}</p>
            <p>{comment.poster}</p>
            <p>{comment.date}</p>
        </div>
    );
}

export default AdminCommentItem;