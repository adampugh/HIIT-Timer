import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import Footer from "../../components/UI/footer";


class Start extends Component {
    state = {};

    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    }
};

export default Start;