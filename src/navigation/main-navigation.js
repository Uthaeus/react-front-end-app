import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="nav-container">
            <NavLink to="/" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/calculator" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Calculator</NavLink>
            <NavLink to="/quote" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Quote Machine</NavLink>
            <NavLink to="/drum" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Drum Machine</NavLink>
            <NavLink to="/pomodoro" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Pomodoro Clock</NavLink>

        </div>
    );
}

export default MainNavigation;