import { useForm } from "react-hook-form";
import { useEffect } from "react";

function BlogForm({ user, blog, newBlogHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function onSubmit(data) {
        let newBlog = {
            id: blog ? blog.id : Math.random().toString(),
            title: data.title,
            content: data.content,
            poster: user.username,
            date: new Date().toISOString()
        };

        newBlogHandler(newBlog);
        reset();
        window.alert('Blog created successfully!');
    }

    return (
        <div className="blog-form-container hide-blog-form">
            <h2 className="blog-form-title">{blog ? 'Edit Post' : 'Create Post'}</h2>

            <form className="blog-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="title">Title</label>
                    <input type='text' className="form-control" {...register('title', { required: true })} />
                    {errors?.title && <p className="error">Title is required.</p>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" rows={5} {...register('content', { required: true })} />
                    {errors?.content && <p className="error">Content is required.</p>}
                </div>

                <button className="blog-form-button mb-3" type="submit">{blog ? 'Edit Post' : 'Create Post'}</button>
            </form>
        </div>
    );
}

export default BlogForm;