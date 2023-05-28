import { useState } from "react";

import { DUMMY_CATEGORIES } from "./dummy_data";

function BlogSidebar({ blogFilterHandler, addCategoryHandler }) {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);

    return (
        <div className="blog-sidebar">
            <h4 className="categories-title">Categories</h4>
            <div className="categories-wrapper">
                {categories.map(category => <p key={category.id} className="categories-item">{category.name}</p>)}
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