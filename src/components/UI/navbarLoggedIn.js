import React from "react";
import { NavLink } from "react-router-dom";

const navbarLoggedIn = () => (
    <nav className="navbar navbar--loggedIn">
        <div className="container">
            <div className="navbar__items">
                <h2>HIIT Timer</h2>
                <div className="navbar__links">
                    <NavLink to="/workouts"><h3>Workouts</h3></NavLink>
                    <NavLink to="/"><h3>Log Out</h3></NavLink>
                </div>
            </div>
        </div>
    </nav>
);

export default navbarLoggedIn;