
function CommentItem({ comment }) {
  return (
    <div className="this-comment-item-container">
      <p className="this-comment-item-content">{comment.content}</p>
      <p className="this-comment-item-details">posted <span className="this-item-date">{comment.date}</span> by <span className="this-item-poster">{comment.poster}</span></p>
    </div>
  );
}

export default CommentItem;