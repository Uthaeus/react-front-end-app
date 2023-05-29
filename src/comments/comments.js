import { useState } from "react";

import { DUMMY_COMMENTS } from "../util/dummy_data";

function Comments(props) {
    const [comments, setComments] = useState(DUMMY_COMMENTS);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.content}</p>
                        <p>Posted by {comment.poster} on {comment.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;











