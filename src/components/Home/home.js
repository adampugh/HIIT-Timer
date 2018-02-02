import React from "react";
import Navbar from "../UI/navbar";
import VideoBanner from "./videoBanner";

const home = () => (
    <div>
        <Navbar links={["Sign Up", "Log In"]} />
        <VideoBanner />
    </div>
);

export default home;