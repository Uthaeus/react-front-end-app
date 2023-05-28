import { Outlet } from "react-router";
import { useState } from "react";

import BlogNavigation from "../navigation/blog-navigation";

function BlogLayout() {
    const [user, setUser] = useState(null);

    function setUserHandler(user) {
        setUser(user);
    }

    function clearUserHandler() {
        setUser(null);
    }

    

  return (
    <div className="blog-layout">
        <BlogNavigation setUserHandler={setUserHandler} clearUserHandler={clearUserHandler} />
        <Outlet context={[user]} />
    </div>
  );
}

export default BlogLayout;