import { NavLink } from "react-router-dom";
import { useState } from "react";

import BlogLoginForm from "../util/blog-login-form";
import logo from "../assets/images/space-main1.jpg";

function BlogNavigation({ setUserHandler, clearUserHandler }) {
  const [user, setUser] = useState(null);
  const [isUserForm, setIsUserForm] = useState(false);

  function logoutHandler() {
    setUser(null);
    clearUserHandler();
  }

  function loginToggleHandler() {
    let element = document.querySelector(".blog-login-form-container");
    element.classList.toggle("blog-login-form-container-active");
  }

  function loginHandler(username) {
    let newUser = {
        id: 1,
        username: username
    }
    setUser(newUser);
    setUserHandler(newUser);
    loginToggleHandler();
  }

  return (
    <div className="blog-navigation">
      <div className="blog-navigation-header">
        <img src={logo} alt="logo" width='100%' style={{borderRadius: '50%'}} />
        {user && <p className="blog-nav-user">Logged in as {user.username}</p>}
      </div>

      <div className="blog-navigation-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Calculator
        </NavLink>
        <NavLink
          to="/quote"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Quote
        </NavLink>
        <NavLink
          to="/drum"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Drum
        </NavLink>
        <NavLink
          to="/pomodoro"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Pomodoro
        </NavLink>
        <NavLink
          to="/markdown"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Markdown
        </NavLink>
        <NavLink
          to="/example-form"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/css-examples"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          CSS
        </NavLink>
        <NavLink
          to="/comment-example"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Comment
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            ({ isActive } ? "blog-link link-active" : "blog-link")
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "blog-link link-active" : "blog-link"
          }
        >
          Admin
        </NavLink>
      </div>


      <div className="blog-navigation-auth-links">
        {user ? (
          <NavLink
            onClick={logoutHandler}
            className={({ isActive }) =>
              ({ isActive } ? "blog-link link-active" : "blog-link")
            }
          >
            Logout
          </NavLink>
        ) : (
          <>
            <BlogLoginForm loginHandler={loginHandler} />
            <NavLink
              onClick={loginToggleHandler}
              className={({ isActive }) =>
                ({ isActive } ? "blog-link link-active" : "blog-link")
              }
            >
              Login
            </NavLink>
            <NavLink
              onClick={loginToggleHandler}
              className={({ isActive }) =>
                ({ isActive } ? "blog-link link-active" : "blog-link")
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogNavigation;
