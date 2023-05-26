import { useState, useEffect } from "react";

const DUMMY_COMMENTS = [
    {
        id: "c1",
        name: "Max",
        text: "A first comment!",
    },
    {
        id: "c2",
        name: "Manuel",
        text: "A second comment!",
    },
    {
        id: "c3",
        name: "Julie",
        text: "A third comment!",
    }
];

function CommentExample() {
    const [comments, setComments] = useState(DUMMY_COMMENTS);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            
        }, 1500);
        setIsLoading(false);
    }, []);

    
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
        <h1>Comments</h1>
        {comments.map((comment) => (
            <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            </div>
        ))}
        </div>
    );
}

export default CommentExample;