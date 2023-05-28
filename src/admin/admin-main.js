import { useState } from "react";

import { DUMMY_USERS } from "../util/dummy_data";


function AdminMain() {
    const [users, setUsers] = useState(DUMMY_USERS);

  return (
    <div className="admin-main-container">
      <h1>Admin Main</h1>
    </div>
  );
}

export default AdminMain;