import React from "react";

import Navbar from "../../components/UI/navbarLoggedIn";
import StartWorkoutBanner from "../Start/startWorkoutBanner";
import Footer from "../../components/UI/footer";

const Start = (props) => (
    <div>
        <Navbar />
        <StartWorkoutBanner workout={props.location.state.workout} />
        <Footer />
    </div>
);

export default Start;