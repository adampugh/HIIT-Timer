import React, { Component } from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import StartWorkoutBanner from "../Start/startWorkoutBanner";
import Footer from "../../components/UI/footer";


class Start extends Component {
    state = {};

    render() {
        return (
            <div>
                <Navbar />
                <StartWorkoutBanner />
                <Footer />
            </div>
        );
    }
};

export default Start;