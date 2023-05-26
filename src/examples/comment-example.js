import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import FakePost from "./fake-post";
import ReplyForm from "./reply-form";

const DUMMY_COMMENTS = [
    {
        id: "c1",
        name: "Max",
        body: "A first comment!",
        replies: []
    },
    {
        id: "c2",
        name: "Manuel",
        body: "A second comment!",
        replies: []
    },
    {
        id: "c3",
        name: "Julie",
        body: "A third comment!",
        replies: []
    }
];

function CommentExample() {
    const [comments, setComments] = useState(DUMMY_COMMENTS);
    const [replies, setReplies] = useState([]);
    const [replyForm, setReplyForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
    }, []);

    function replySubmitHandler(reply) {
        setReplies( prev => [reply, ...prev]);
    }

    function commentReplyHandler() {
        let replyFormElement = document.querySelector(".reply-form-wrapper");

        if (replyForm) {
            replyFormElement.classList.add("reply-form-slide-out");
            void replyFormElement.offsetWidth;
            replyFormElement.classList.remove("reply-form-slide-in");
        } else {
            replyFormElement.classList.add("reply-form-slide-in");
            void replyFormElement.offsetWidth;
            replyFormElement.classList.remove("reply-form-slide-out");
        }

        setReplyForm(!replyForm);
    }

    function itemHoverHandler(event) {
        let element = document.querySelector(".comment-item-arrow");

        element.classList.add("hovered");
        void element.offsetWidth;
        element.classList.remove("unhovered");
    }

    function itemUnhoverHandler(event) {
        let element = document.querySelector(".comment-item-arrow");

        element.classList.remove("hovered");
        void element.offsetWidth;
        element.classList.add("unhovered");
    }

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
                        <div className="comment-item-wrapper" key={comment.id} onMouseEnter={itemHoverHandler} onMouseLeave={itemUnhoverHandler}>
                            <p className="comment-item-arrow unhovered">{'>'}</p>
                            <p className="comment-item-body">{comment.body}</p>
                            <p className="posted-by"><span onClick={commentReplyHandler} className="comment-reply-link">reply</span> posted by <span className="comment-item-name">{comment.name}</span></p>
                        </div>
                    ))}
                </div>

                <div className="replies-wrapper">
                    <h1 className="replies-title">Replies</h1>
                    
                    <div className="reply-form-wrapper reply-form-slide-out">
                        <ReplyForm onReplySubmit={replySubmitHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentExample;