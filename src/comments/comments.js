import { useState } from "react";

import { DUMMY_COMMENTS } from "../util/dummy_data";
import CommentForm from "./comment-form";
import CommentItem from "./comment-item";

function Comments() {
    const [comments, setComments] = useState(DUMMY_COMMENTS);

    return (
        <div className="comments-container">
            <div className="comments-left-column">
                <div className="comments-post-container">
                    fake post goes here...
                </div>

                <div className="comments-form-wrapper">
                    <CommentForm />
                </div>

            </div>

            <div className="comments-right-column">
                <div className="comments-list-wrapper">
                    {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
                </div>
            </div>
        </div>
    );
}

export default Comments;











