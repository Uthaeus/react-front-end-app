
function AdminUserItem({ user, blogCount, commentCount, userDisplayHandler }) {

    return (
        <div className="admin-user-item">
            <p onClick={() => userDisplayHandler(user.id)} className="user-item user-link">{user.name}</p>
            <p className="user-item">{user.email}</p>
            <p className="user-item">{user.role}</p>
            <p className="user-item">{blogCount}</p>
            <p className="user-item">{commentCount}</p>
        </div>
    );
}

export default AdminUserItem;