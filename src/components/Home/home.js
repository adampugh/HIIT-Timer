import React from "react";
import Navbar from "../UI/navbar";
import VideoBanner from "./videoBanner";
import TextBanner from "./bannerText";
import PhoneBanner from "./phoneBanner";
import Panels from "./panels";
import Footer from "../UI/footer";


const home = () => (
    <div>
        <Navbar links={["Sign Up", "Log In"]} classes={"navbar--loggedOut"} />
        <VideoBanner />
        <TextBanner />
        <PhoneBanner />
        <Panels />
        <Footer />
    </div>
);

export default home;