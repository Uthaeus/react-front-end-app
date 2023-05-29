import { useState } from "react";

import { DUMMY_COMMENTS } from "../util/dummy_data";
import CommentForm from "./comment-form";
import CommentItem from "./comment-item";
import FakePost from "./fake-post";

function Comments() {
    const [comments, setComments] = useState(DUMMY_COMMENTS);

    return (
        <div className="comments-container">
            <div className="comments-left-column">
                <div className="comments-post-container">
                    <FakePost />
                </div>

                <div className="comments-form-wrapper">
                    <CommentForm />
                </div>

            </div>

            <div className="comments-right-column">
                <h2 className="comments-list-title">Comments</h2>
                <div className="comments-list-wrapper">
                    {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
                </div>
            </div>
        </div>
    );
}

export default Comments;











