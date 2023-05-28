import { useState } from "react";

import { DUMMY_USERS, DUMMY_BLOGS, DUMMY_COMMENTS } from "../util/dummy_data";
import AdminUserItem from "./admin-user-item";
import AdminUserDetail from "./admin-user-detail";


function AdminMain() {
    const [users, setUsers] = useState(DUMMY_USERS);
    const [blogs, setBlogs] = useState(DUMMY_BLOGS);
    const [comments, setComments] = useState(DUMMY_COMMENTS);
    const [isUserDetail, setIsUserDetail] = useState(false);
    const [user, setUser] = useState(null);
    const [userBlogs, setUserBlogs] = useState([]);
    const [userComments, setUserComments] = useState([]);

    function userDisplayHandler(id) {
        if (id === null) {
            setUser(null);
            setUserBlogs([]);
            setUserComments([]);
        } else {
            let user = users.find(user => user.id === id);
            setUser(user);
            let userBlogs = blogs.filter(blog => blog.poster === user.name);
            setUserBlogs(userBlogs);
            let userComments = comments.filter(comment => comment.poster === user.name);
            setUserComments(userComments);
        }


        let element = document.querySelector('.admin-user-detail-container');
        element.classList.toggle('admin-user-detail-slide-in');
        setIsUserDetail(!isUserDetail);
    }

  return (
    <div className="admin-main-container">
      <h1 className="admin-main-title">Admin Main</h1>

        <AdminUserDetail user={user} blogs={userBlogs} comments={userComments} userDisplayHandler={userDisplayHandler}  />

      <div className="admin-main-content">
        <div className="content-header">
            <p className="header-item">name:</p>
            <p className="header-item">email:</p>
            <p className="header-item">role:</p>
            <p className="header-item">blogs:</p>
            <p className="header-item">comments:</p>
        </div>
        {users.map((user) => <AdminUserItem key={user.id} user={user} blogCount={blogs.filter(blog => blog.poster === user.name).length} commentCount={comments.filter(comment => comment.poster === user.name).length} userDisplayHandler={userDisplayHandler} />)}
      </div>
    </div>
  );
}

export default AdminMain;