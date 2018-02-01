import React from "react";
import { NavLink } from "react-router-dom";

const navbar = (props) => (
    <nav className="navbar">
        <div className="container">
            <div className="navbar__items">
                <h2>HIIT Timer</h2>
                <div className="navbar__links">
                    {props.links.map(item => 
                        <NavLink 
                            key={item}
                            to={item.split(" ").join("").toLowerCase()}
                            activeClassName={"navbar__links--active"}>
                                {item}
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    </nav>
);

export default navbar;