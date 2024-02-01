import React from "react";
import { NavLink } from "react-router-dom";

// Functional component representing the navigation menu
const Nav = () => {
    return (
        // Navigation container with a class name
        <nav className="main-nav">

            {/* Unordered list for navigation links */}
            <ul>
                {/* List item with a NavLink for the 'Cats' link */}
                <li><NavLink to='/cats'>Cats</NavLink></li>

                {/* List item with a NavLink for the 'Dogs' link */}
                <li><NavLink to='/dogs'>Dogs</NavLink></li>

                {/* List item with a NavLink for the 'Computers' link */}
                <li><NavLink to='/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    );
};

// Export the Nav component for use in other parts of the application
export default Nav;
