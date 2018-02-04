import React from "react";

import LoginModal from "./loginModal";

const navbarLoggedOut = (props) => (
    <div>
        <LoginModal isOpen={props.modalOpen}/>
        <nav className="navbar navbar--loggedOut">
            <div className="container">
                <div className="navbar__items">
                    <h2>HIIT Timer</h2>
                    <div className="navbar__links">
                        <h3 onClick={props.handleOpenModal}>Sign Up / Log In</h3>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);

export default navbarLoggedOut;