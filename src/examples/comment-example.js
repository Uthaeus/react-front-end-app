import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import FakePost from "./fake-post";

const DUMMY_COMMENTS = [
    {
        id: "c1",
        name: "Max",
        body: "A first comment!",
    },
    {
        id: "c2",
        name: "Manuel",
        body: "A second comment!",
    },
    {
        id: "c3",
        name: "Julie",
        body: "A third comment!",
    }
];

function CommentExample() {
    const [comments, setComments] = useState(DUMMY_COMMENTS);
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
    }, []);

    function onSubmit(data) {
        const newComment = {
            id: Math.random().toString(),
            name: data.name,
            body: data.body
        };

        setComments(prev => [newComment, ...prev]);

        reset();
    }
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="comment-example-container">
            <FakePost />

            <div className="comment-example-comments-wrapper">
                <div className="comment-example-form-wrapper">
                    <form className="comment-example-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-2">
                            <label htmlFor="name">Name</label>
                            <input type='text' className="form-control" {...register("name", { required: true })} />
                            {errors?.name && <span className="error-message">This field is required</span>}
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="body">Comment</label>
                            <textarea className="form-control" rows={3} {...register("body", { required: true })} />
                            {errors?.body && <span className="error-message">This field is required</span>}
                        </div>

                        <button type="submit" className="comment-example-submit">Submit</button>
                    </form>
                </div>
                <div className="comment-example-comments">
                    <h1 className="comments-title">Comments</h1>
                    {comments.map((comment) => (
                        <div className="comment-item-wrapper" key={comment.id}>
                            <p className="comment-item-body">{comment.body}</p>
                            <p className="posted-by">posted by <span className="comment-item-name">{comment.name}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CommentExample;