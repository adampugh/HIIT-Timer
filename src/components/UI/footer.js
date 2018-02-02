import React from "react";

import SocialLinks from "./socialLinks";

const footer = () => (
    <footer>
        <div className="container">
            <h1>HIIT Timer</h1>
            <SocialLinks />
            <h3>&copy; 2018 Design by <a href="https://adampugh.github.io/kokonoka/" target="_blank" rel="noopener noreferrer">Kokonoka </a></h3>
        </div>
    </footer>
);

export default footer;