import { Outlet } from "react-router";

import BlogNavigation from "../navigation/blog-navigation";

function AdminLayout() {
  return (
    <div className="admin-layout-container">
      <BlogNavigation />
      <Outlet />
    </div>
  );
}

export default AdminLayout;