import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { startLogout } from "../../store/actions/actions";

export const NavbarLoggedIn = (props) => (
    <nav className="navbar navbar--loggedIn">
        <div className="container">
            <div className="navbar__items">
                <h2>HIIT Timer</h2>
                <div className="navbar__links">
                    <NavLink to="/workouts"><h3>Workouts</h3></NavLink>
                    
                    <h3 onClick={props.startLogout}>Log Out</h3>
                </div>
            </div>
        </div>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(NavbarLoggedIn);

// <NavLink to="/">