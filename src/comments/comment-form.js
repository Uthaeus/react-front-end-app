import { useForm } from "react-hook-form";

function CommentForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {};

    return (
        <form className="comments-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-1">
                <label htmlFor="poster">Your Name</label>
                <input type="text" className="form-control" {...register("poster", { required: true })} />
                {errors?.poster && <span className="error-message">Please enter your name.</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="content">Comment</label>
                <textarea className="form-control" rows={3} {...register("content", { required: true })} />
                {errors?.content && <span className="error-message">Please enter a comment.</span>}
            </div>

            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    );
}

export default CommentForm;