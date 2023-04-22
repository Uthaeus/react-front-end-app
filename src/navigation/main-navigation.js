import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="nav-container">
            <NavLink to="/" exact className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>

        </div>
    );
}

export default MainNavigation;