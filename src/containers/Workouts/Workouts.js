import React, { Component } from "react";

import Navbar from "../../components/UI/navbar";
import Footer from "../../components/UI/footer";

class Workouts extends Component {


    render() {
        return (
            <div>
                <Navbar links={["Workouts", "Log Out"]} classes={"navbar--loggedIn"}/>
                <Footer />
            </div>
        );
    }
}

export default Workouts;