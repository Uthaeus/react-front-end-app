
function CommentItem({ comment }) {
  return (
    <div>
      <p>{comment.content}</p>
      <p>by {comment.poster}</p>
    </div>
  );
}

export default CommentItem;