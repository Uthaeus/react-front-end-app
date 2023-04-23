import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/calculator"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Calculator
      </NavLink>
      <NavLink
        to="/quote"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Quote Machine
      </NavLink>
      <NavLink
        to="/drum"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Drum Machine
      </NavLink>
      <NavLink
        to="/pomodoro"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Pomodoro Clock
      </NavLink>
      <NavLink
        to="/markdown"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Markdown Previewer
      </NavLink>
    </div>
  );
}

export default MainNavigation;
