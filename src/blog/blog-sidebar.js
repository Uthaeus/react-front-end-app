

function BlogSidebar({ blogFilterHandler, categories }) {

    return (
        <div className="blog-sidebar">
            <div className="categories-title-wrapper">
                <h4 className="categories-title">Categories</h4>
                <p onClick={() => blogFilterHandler()} className="reset-filter-btn">reset filter</p>
            </div>
            <div className="categories-wrapper">
                {categories?.map(category => <p onClick={() => blogFilterHandler(category.name)} key={category.id} className="categories-item">{category.name}</p>)}
            </div>

            <h5 className="socials-title">Socials</h5>
            <div className="socials-wrapper">
                <p className="socials-item">
                    <i className="bi bi-instagram"></i>
                </p>
                <p className="socials-item">
                    <i className="bi bi-twitter"></i>
                </p>
                <p className="socials-item">
                    <i className="bi bi-github"></i>
                </p>
                <p className="socials-item">
                    <i className="bi bi-facebook"></i>
                </p>
            </div>
        </div>
    );
}

export default BlogSidebar;