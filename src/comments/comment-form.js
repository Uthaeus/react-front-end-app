import { useForm } from "react-hook-form";

function CommentForm({ addCommentHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const comment = {
            id: Math.random().toString(),
            date: new Date().toISOString().slice(0, 10),
            ...data
        };

        addCommentHandler(comment);
        reset();
    };

    return (
        <form className="comments-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="row g-3">
                <div className="form-group col-md-6">
                    <label htmlFor="poster">Your Name</label>
                    <input type="text" className="form-control" {...register("poster", { required: true })} />
                    {errors?.poster && <span className="error-message">Please enter your name.</span>}
                </div>

                <div className="col-md-6 p-2">
                    <p className="comments-form-message">Comments are moderated and may take up to 24 hours to appear.</p>
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="content">Comment</label>
                <textarea className="form-control" rows={3} {...register("content", { required: true })} />
                {errors?.content && <span className="error-message">Please enter a comment.</span>}
            </div>

            <div className="submit-action-div" />
            <button type="submit" className="comments-form-btn mb-2">Submit</button>
        </form>
    );
}

export default CommentForm;