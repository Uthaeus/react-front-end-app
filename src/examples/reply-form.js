import { useForm } from "react-hook-form";

function ReplyForm( { onReplySubmit}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmit(data) {
        const newReply = {
            id: Math.random().toString(),
            name: data.name,
            body: data.body
        };

        onReplySubmit(newReply);

        reset();
    }

    return (
        <div className="reply-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" {...register("name", { required: true })} />
                    {errors?.name && <span className="error-message">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="body">Comment</label>
                    <textarea className="form-control" rows={3} {...register("body", { required: true })} />
                    {errors?.body && <span className="error-message">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ReplyForm;